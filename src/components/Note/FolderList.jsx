/* eslint-disable no-unused-vars */
import { Card, CardContent, List, Typography, IconButton } from "@mui/material";
import { DeleteOutlined, EditOutlined } from "@mui/icons-material";

import { Box } from "@mui/system";
import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import NewFolder from "./NewFolder";
import axios from "axios";
import { ENDPOINT } from "../../ultil/constants";
import { RequestDelete, RequestGet } from "../../ultil/request";
import { AuthContext } from "../../context/AuthProvider";
import moment from "moment";

export default function FolderList() {
  const {
    user: { uid },
  } = useContext(AuthContext);
  const [folders, setFolders] = useState([]);
  const [activeFolderId, setActiveFolderId] = useState();

  const handleFolderAdded = (newFolder) => {
    setFolders([newFolder, ...folders]);
  };

  useEffect(() => {
    const fetchFolders = async () => {
      try {
        // Thêm accessToken vào header của request
        const response = await RequestGet(`folders/${uid}`);

        setFolders(response);
        console.table(response);
      } catch (error) {
        console.error("Error fetching folders:", error);
      }
    };

    fetchFolders();
  }, [uid]);

  const handleDeleteFolder = async (folderId) => {
    try {
      // Hiển thị cửa sổ cảnh báo xác nhận xóa
      const isConfirmed = window.confirm(
        "Are you sure you want to delete this folder?"
      );

      // Nếu người dùng xác nhận xóa
      if (isConfirmed) {
        await RequestDelete(`folders/${folderId}`);
        setFolders(folders.filter((folder) => folder._id !== folderId));
        console.log("Delete successfully");
      } else {
        console.log("Cancel delete");
      }
    } catch (error) {
      console.error("Error deleting folder:", error);
    }
  };

  // Xử lý sự kiện chỉnh sửa folder
  const handleEditFolder = (folderId) => {
    // Điều hướng đến trang chỉnh sửa folder, sử dụng React Router DOM
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
      {folders &&
        folders.map(({ _id, name, updatedAt }, index) => (
          <Link
            key={index}
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
                  <div
                    style={{ fontWeight: "bold" }}
                    dangerouslySetInnerHTML={{
                      __html: `${name.substring(0, 30) || "Empty"}`,
                    }}
                  />
                </Typography>
                <Typography sx={{ fontSize: "10px" }}>
                  {moment(updatedAt).format("MMMM Do YYYY, h:mm:ss a")}
                </Typography>
              </CardContent>

              {/* 
              <IconButton
                sx={{
                  top: "5px",
                  right: "35px", // Điều chỉnh vị trí của nút chỉnh sửa
                  visibility: "hidden",
                  position: "absolute",
                }}
                onClick={(e) => {
                  e.stopPropagation(); // Ngăn chặn sự kiện bubble lên thẻ Link
                  handleEditFolder(_id);
                }}
              >
                <EditOutlined />
              </IconButton>
            */}

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
