/* eslint-disable no-unused-vars */
import { DeleteOutlined, NoteAddOutlined } from "@mui/icons-material";
import {
  Card,
  CardContent,
  Grid,
  IconButton,
  List,
  Tooltip,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import {
  Link,
  Outlet,
  useParams,
  useNavigate,
  useSubmit,
} from "react-router-dom";
import { ENDPOINT } from "../../ultil/constants";

export default function NoteList() {
  const { noteId, folderId } = useParams();
  const [folder, setFolder] = useState(null);
  const [activeNoteId, setActiveNoteId] = useState();
  const [notes, setNotes] = useState();
  const navigate = useNavigate();
  const submit = useSubmit();

  // Lấy ra note theo folderId
  useEffect(() => {
    const fetchNote = async () => {
      try {
        const response = await axios.get(`${ENDPOINT}/notes/${folderId}`);
        setNotes(response.data);
      } catch (error) {
        console.error("Error fetching note:", error);
      }
    };
    fetchNote();
  }, [folderId]); // folderId thay đổi thì gọi lại useEffect

  useEffect(() => {
    // Fetch folder data based on folderId
    const fetchFolder = async () => {
      try {
        const fetchedFolder = {
          notes: notes,
        };
        setFolder(fetchedFolder);
      } catch (error) {
        console.error("Error fetching folder:", error);
      }
    };

    fetchFolder();
  }, [notes]);

  useEffect(() => {
    // Kiểm tra nếu activeNoteId không thuộc danh sách các ghi chú của thư mục,
    // thì cập nhật activeNoteId thành ghi chú đầu tiên trong danh sách
    if (
      !folder ||
      !folder.notes ||
      !folder.notes.some((note) => note._id === activeNoteId)
    ) {
      setActiveNoteId(noteId || folder?.notes?.[0]?._id || null);
    }
  }, [folder, activeNoteId, noteId]);

  // //
  // useEffect(() => {
  //   if (notes && notes.length > 0 && !noteId) {
  //     navigate(`note/${notes[0].id}`);
  //   }
  // }, [notes, navigate, noteId]);

  const handleAddNewNote = async (content, folderId) => {
    try {
      if (!content) {
        console.error("Note content cannot be empty.");
        return;
      }

      const response = await axios.post(`${ENDPOINT}/notes/`, {
        content,
        folderId,
      });

      console.log("New note added:", response.data);

      // Cập nhật danh sách ghi chú sau khi thêm mới thành công
      const newNote = response.data;
      setNotes((prevNotes) => [...prevNotes, newNote]);

      // Điều hướng người dùng đến ghi chú mới được tạo
      navigate(`/note/${newNote.id}`);
    } catch (error) {
      console.error("Error adding new note:", error);
    }
  };

  const handleDeleteNote = async (noteId) => {
    try {
      await axios.delete(`${ENDPOINT}/notes/${noteId}`);
      setNotes(notes.filter((note) => note._id !== noteId));
    } catch (error) {
      console.error("Error deleting folder:", error);
    }
  };

  return (
    <>
      <Grid container height="100%">
        <Grid
          item
          xs={4}
          sx={{
            width: "100%",
            maxWidth: 360,
            bgcolor: "#F0EBE3",
            height: "100%",
            overflowY: "auto",
            padding: "10px",
            textAlign: "left",
          }}
        >
          <List
            subheader={
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Typography sx={{ fontWeight: "bold" }}>Notes</Typography>
                <Tooltip title="Add Note">
                  <IconButton size="small" onClick={handleAddNewNote}>
                    <NoteAddOutlined />
                  </IconButton>
                </Tooltip>
              </Box>
            }
          >
            {folder?.notes?.map(({ _id, content, updatedAt }) => (
              <Link
                key={_id}
                to={`note/${_id}`}
                style={{ textDecoration: "none" }}
                onClick={() => setActiveNoteId(_id)}
              >
                <Card
                  sx={{
                    mb: "5px",
                    backgroundColor:
                      _id === activeNoteId ? "rgb(255 211 140)" : null,
                    position: "relative",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.lastChild.style.visibility = "visible")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.lastChild.style.visibility = "hidden")
                  }
                >
                  <CardContent
                    sx={{ "&:last-child": { pb: "10px" }, padding: "10px" }}
                  >
                    <div
                      style={{ fontSize: 14, fontWeight: "bold" }}
                      dangerouslySetInnerHTML={{
                        __html: `${content.substring(0, 30) || "Empty"}`,
                      }}
                    />
                    <Typography sx={{ fontSize: "10px" }}>
                      {moment(updatedAt).format("MMMM Do YYYY, h:mm:ss a")}
                    </Typography>
                  </CardContent>
                  <IconButton
                    sx={{
                      top: "5px",
                      right: "5px",
                      visibility: "hidden",
                      position: "absolute",
                    }}
                    onClick={() => handleDeleteNote(_id)}
                  >
                    <DeleteOutlined />
                  </IconButton>
                </Card>
              </Link>
            ))}
          </List>
        </Grid>
        <Grid item xs={8}>
          <Outlet />
        </Grid>
      </Grid>
    </>
  );
}
