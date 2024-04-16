/* eslint-disable no-unused-vars */
import { Card, CardContent, List, Typography, IconButton } from "@mui/material";
import { DeleteOutlined } from "@mui/icons-material";

import { Box } from "@mui/system";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import NewFolder from "./NewFolder";
import axios from "axios";

export default function FolderList() {
  const { folderId } = useParams();
  const [folders, setFolders] = useState([]);
  const [activeFolderId, setActiveFolderId] = useState(folderId);

  const handleFolderAdded = (newFolder) => {
    setFolders([newFolder, ...folders]); // Thêm folder mới vào đầu danh sách
  };

  useEffect(() => {
    const fetchFolders = async () => {
      try {
        const response = await axios.get("http://localhost:9999/folders");
        setFolders(response.data);
      } catch (error) {
        console.error("Error fetching folders:", error);
      }
    };

    fetchFolders();
  }, []);

  const handleDeleteFolder = async (folderId) => {
    try {
      await axios.delete(`http://localhost:9999/folders/${folderId}`);
      setFolders(folders.filter((folder) => folder._id !== folderId));
    } catch (error) {
      console.error("Error deleting folder:", error);
    }
  };

  return (
    <List
      sx={{
        width: "100%",
        bgcolor: "#7D9D9C",
        height: "100%",
        padding: "10px",
        textAlign: "left",
        overflowY: "auto",
      }}
      subheader={
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography sx={{ fontWeight: "bold", color: "white" }}>
            Folders
          </Typography>
          <NewFolder onFolderAdded={handleFolderAdded} />
        </Box>
      }
    >
      {folders.map(({ _id, name }) => (
        <Link
          key={_id}
          to={`folders/${_id}`}
          style={{
            textDecoration: "none",
          }}
          onClick={() => setActiveFolderId(_id)}
        >
          <Card
            sx={{
              mb: "5px",
              backgroundColor:
                activeFolderId === _id ? "rgb(255 211 140)" : null,
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
              <Typography sx={{ fontSize: 16, fontWeight: "bold" }}>
                {name}
              </Typography>
            </CardContent>
            <IconButton
              sx={{
                top: "5px",
                right: "5px",
                visibility: "hidden",
                position: "absolute",
              }}
              onClick={() => handleDeleteFolder(_id)}
            >
              <DeleteOutlined />
            </IconButton>
          </Card>
        </Link>
      ))}
    </List>
  );
}
