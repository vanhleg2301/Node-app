/* eslint-disable no-unused-vars */
import { NoteAddOutlined } from "@mui/icons-material";
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
import { Link, Outlet, useParams, useNavigate } from "react-router-dom";
import { ENDPOINT } from "../../ultil/constants";

export default function NoteList() {
  const { folderId } = useParams();
  const [folder, setFolder] = useState(null);
  const [activeNoteId, setActiveNoteId] = useState();
  const [notes, setNotes] = useState();

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const response = await axios.get(
          `http://localhost:9999/notes/${folderId}`
        );
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
        // Simulated fetch call using setTimeout
        setTimeout(() => {
          const fetchedFolder = {
            notes,
          };
          setFolder(fetchedFolder);
        }, 1000); // Simulated delay of 1 second
      } catch (error) {
        console.error("Error fetching folder:", error);
      }
    };

    fetchFolder();
  });

  const navigate = useNavigate();

  const handleAddNewNote = () => {
    alert("AddNewNote");
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
                  }}
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
