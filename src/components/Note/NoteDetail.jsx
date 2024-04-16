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
import {
  useLoaderData,
  useSubmit,
  useLocation,
  useParams,
} from "react-router-dom";
import { debounce } from "@mui/material";
import axios from "axios";

export default function NoteDetail() {
  const submit = useSubmit();
  const location = useLocation();
  const { content } = useParams;
  const [note, setNote] = useState(null);

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const response = await axios.get(
          `http://localhost:9999/notes/note/${content}`
        );
        setNote(response.data);
      } catch (error) {
        console.error("Error fetching note:", error);
      }
    };
    fetchNote();
  });
  const [editorState, setEditorState] = useState(() => {
    return EditorState.createEmpty();
  });

  useEffect(() => {
    const blocksFromHTML = convertFromHTML(note);
    const state = ContentState.createFromBlockArray(
      blocksFromHTML.contentBlocks,
      blocksFromHTML.entityMap
    );
    setEditorState(EditorState.createWithContent(state));
  }, [note]);

  useEffect(() => {
    setRawHTML(note);
  }, [note]);

  const [rawHTML, setRawHTML] = useState(note);

  const handleOnChange = (e) => {
    setEditorState(e);
    setRawHTML(draftToHtml(convertToRaw(e.getCurrentContent())));
  };

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
  return (
    <>
      <Editor
        editorState={editorState}
        onEditorStateChange={handleOnChange}
        placeholder="Write something!"
      />
    </>
  );
}
