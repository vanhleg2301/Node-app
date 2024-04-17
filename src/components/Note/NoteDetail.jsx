/* eslint-disable no-unused-vars */
import React, { useEffect, useMemo, useState } from "react";
import {
  ContentState,
  convertFromHTML,
  convertToRaw,
  EditorState,
} from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import axios from "axios"; // Import axios
import { ENDPOINT } from "../../ultil/constants";
import { debounce } from "@mui/material";
import { useParams } from "react-router-dom";

export default function NoteDetail() {
  const { content } = useParams();
  const [note, setNote] = useState(null);
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const response = await axios.get(`${ENDPOINT}/notes/note/${content}`);
        setNote(response.data);
      } catch (error) {
        console.error("Error fetching note:", error);
      }
    };
    fetchNote();
  }, [content]);

  useEffect(() => {
    if (note && typeof note === "string" && note.trim() !== "") {
      const blocksFromHTML = convertFromHTML(note);
      const state = ContentState.createFromBlockArray(
        blocksFromHTML.contentBlocks,
        blocksFromHTML.entityMap
      );
      setEditorState(EditorState.createWithContent(state));
    }
  }, [note]);

  const handleOnChange = (editorState) => {
    setEditorState(editorState);
    const rawHTML = draftToHtml(convertToRaw(editorState.getCurrentContent()));
    debouncedMemorized(rawHTML);
  };

  const debouncedMemorized = useMemo(() => {
    return debounce((rawHTML) => {
      if (!note || rawHTML === note.content) return;

      // Make POST request to update note content
      axios
        .post(`${ENDPOINT}/notes/update/${content}`, { content: rawHTML })
        .then((response) => {
          console.log("Note updated successfully:", response.data);
        })
        .catch((error) => {
          console.error("Error updating note:", error);
        });
    }, 1000);
  }, [note, content]);

  return (
    <>
      {editorState && (
        <Editor
          editorState={editorState}
          onEditorStateChange={handleOnChange}
          placeholder="Write something!"
        />
      )}
    </>
  );
}
