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
  const { id } = useParams();
  const [note, setNote] = useState(null);
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const [rawHTML, setRawHTML] = useState(null); // Sử dụng null thay vì note để tránh gán giá trị null cho note ban đầu
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => {
      setIsMounted(false);
    };
  }, []);
  console.log(id);
  useEffect(() => {
    const fetchNote = async () => {
      try {
        const response = await axios.get(`${ENDPOINT}/notes/note/${id}`);

        if (isMounted) {
          setNote(response.data);
        }
      } catch (error) {
        console.error("Error fetching note:", error);
      }
    };

    fetchNote();

    // Cleanup function
    return () => {
      // Ensure setIsMounted is called only when component is mounted
      if (isMounted) {
        setIsMounted(false);
      }
    };
  }, [id, isMounted]);

  useEffect(() => {
    if (note && typeof note === "string" && note.trim() !== "") {
      const blocksFromHTML = convertFromHTML(note);
      const state = ContentState.createFromBlockArray(
        blocksFromHTML.contentBlocks,
        blocksFromHTML.entityMap
      );
      setEditorState(EditorState.createWithContent(state));
      setRawHTML(note); // Gán giá trị cho rawHTML khi note có giá trị
    }
  }, [note]);

  const handleOnChange = (editorState) => {
    setEditorState(editorState);
    setRawHTML(draftToHtml(convertToRaw(editorState.getCurrentContent())));
  };

  return (
    <>
      <Editor
        editorState={editorState}
        onEditorStateChange={handleOnChange}
        placeholder="Enter your note here..."
      />
    </>
  );
}
