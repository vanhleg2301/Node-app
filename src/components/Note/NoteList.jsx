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
import moment from "moment";
import { Link, Outlet, useParams, useNavigate } from "react-router-dom";

export default function NoteList() {
  const { folderId } = useParams();
  const [folder, setFolder] = useState(null);
  const [activeNoteId, setActiveNoteId] = useState(null);

  useEffect(() => {
    // Fetch folder data based on folderId
    const fetchFolder = async () => {
      try {
        // Simulated fetch call using setTimeout
        setTimeout(() => {
          const fetchedFolder = {
            notes: [
              { id: "1", content: "<p>Note here</p>" },
              { id: "2", content: "<p>Note here 1</p>" },
            ],
          };
          setFolder(fetchedFolder);
        }, 1000); // Simulated delay of 1 second
      } catch (error) {
        console.error("Error fetching folder:", error);
      }
    };

    fetchFolder();
  }, [folderId]);

  const navigate = useNavigate();

  const handleAddNewNote = () => {
    // Handle adding a new note
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
                  <IconButton size="small">
                    <NoteAddOutlined />
                  </IconButton>
                </Tooltip>
              </Box>
            }
          >
            {folder?.notes?.map(({ id, content, updatedAt }) => (
              <Link
                key={id}
                to={`note/${id}`}
                style={{ textDecoration: "none" }}
                onClick={() => setActiveNoteId(id)}
              >
                <Card
                  sx={{
                    mb: "5px",
                    backgroundColor:
                      id === activeNoteId ? "rgb(255 211 140)" : null,
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
