/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import {
  EditorState,
  convertFromHTML,
  ContentState,
  convertToRaw,
} from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import axios from "axios";
import { ENDPOINT } from "../../ultil/constants";
import { useParams } from "react-router-dom";

export default function NoteDetail() {
  const { noteId } = useParams(); //children: [{ path: "note/:noteId", element: <NoteDetail /> }],
  const [rawHTML, setRawHTML] = useState(""); // Change to string instead of array
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const accessToken = localStorage.getItem("accessToken");

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const response = await axios.get(`${ENDPOINT}/notes/note/${noteId}`);
        setRawHTML(response.data.content);
        console.log(response.data.content);
      } catch (error) {
        console.error("Error fetching note:", error);
      }
    };

    if (noteId) {
      fetchNote();
    }
  }, [noteId]);

  useEffect(() => {
    if (rawHTML && typeof rawHTML === "string" && rawHTML.trim() !== "") {
      const blocksFromHTML = convertFromHTML(rawHTML);
      const state = ContentState.createFromBlockArray(
        blocksFromHTML.contentBlocks,
        blocksFromHTML.entityMap
      );
      setEditorState(EditorState.createWithContent(state));
    }
  }, [rawHTML]);

  useEffect(() => {
    debouncedMemorized(rawHTML, note, location.pathname);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rawHTML, location.pathname]);

  const debouncedMemorized = useMemo(() => {
    return debounce((rawHTML, note, pathname) => {
      if (rawHTML === note.content) return;

      submit(
        { ...note, content: rawHTML },
        {
          method: "post",
          action: pathname,
        }
      );
    }, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setRawHTML(note.content);
  }, [note.content]);

  const handleOnChange = (e) => {
    setEditorState(e);
    setRawHTML(draftToHtml(convertToRaw(e.getCurrentContent())));

    if (accessToken && noteId) {
      axios
        .put(
          `${ENDPOINT}/notes/${noteId}`,
          { content: updatedContent },
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
              "Content-Type": "application/json",
            },
          }
        )
        .then(() => {
          setRawHTML(updatedContent); // Update rawHTML with the new content
          setEditorState(e);
        })
        .catch((error) => {
          console.error("Error updating note content:", error);
        });
    }
  };

  return (
    <Editor
      editorState={editorState}
      onEditorStateChange={handleOnChange}
      placeholder="Enter your note here..."
    />
  );
}
