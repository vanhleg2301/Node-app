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
import { useSubmit, useLocation } from "react-router-dom";
import { debounce } from "@mui/material";
import axios from "axios";
import { ENDPOINT } from "../../ultil/constants";

export default function NoteText() {
  const submit = useSubmit();
  const location = useLocation();
  const [editorState, setEditorState] = useState(() => {
    return EditorState.createEmpty();
  });
  const [rawHTML, setRawHTML] = useState("");

  useEffect(() => {
    // Lấy dữ liệu ghi chú từ localhost:9999
    const fetchNote = async () => {
      try {
        const response = await axios.get(
          `${ENDPOINT}/notes/` + location.pathname.split("/").pop()
        );
        if (response.data) {
          const blocksFromHTML = convertFromHTML(response.data.content);
          const state = ContentState.createFromBlockArray(
            blocksFromHTML.contentBlocks,
            blocksFromHTML.entityMap
          );
          setEditorState(EditorState.createWithContent(state));
          setRawHTML(response.data.content);
        }
      } catch (error) {
        console.error("Error fetching note:", error);
      }
    };
    fetchNote();
  }, [location.pathname]);

  useEffect(() => {
    debouncedMemorized(rawHTML, location.pathname);
  }, [rawHTML, location.pathname]);

  const debouncedMemorized = useMemo(() => {
    return debounce((rawHTML, pathname) => {
      submit(
        { content: rawHTML },
        {
          method: "post",
          action: pathname,
        }
      );
    }, 1000);
  }, [submit]);

  const handleOnChange = (e) => {
    setEditorState(e);
    setRawHTML(draftToHtml(convertToRaw(e.getCurrentContent())));
  };

  return (
    <Editor
      editorState={editorState}
      onEditorStateChange={handleOnChange}
      placeholder="Write something!"
    />
  );
}
