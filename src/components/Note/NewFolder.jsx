/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  TextField,
  Tooltip,
} from "@mui/material";
import { CreateNewFolderOutlined } from "@mui/icons-material";
import { useSearchParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { ENDPOINT } from "../../ultil/constants";
import { AuthContext } from "../../context/AuthProvider";

export default function NewFolder({ onFolderAdded }) {
  const {
    user: { uid },
  } = useContext(AuthContext);
  const [newFolderName, setNewFolderName] = useState("");
  const [open, setOpen] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const popupName = searchParams.get("popup");
  const accessToken = localStorage.getItem("accessToken");

  const handleOpenPopup = () => {
    setSearchParams({ popup: "add-folder" });
  };

  const handleClose = () => {
    setNewFolderName("");
    navigate(-1);
  };

  const handleNewFolderNameChange = (e) => {
    setNewFolderName(e.target.value);
  };

  const handleAddNewFolder = async () => {
    try {
      const response = await axios.post(
        `${ENDPOINT}/folders`,
        {
          name: newFolderName,
          authorId: uid,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log("New folder created:", response.data);
      handleClose();
      if (onFolderAdded) {
        onFolderAdded(response.data); // Gọi hàm callback và truyền dữ liệu folder mới
      }
    } catch (error) {
      console.error("Error adding new folder:", error);
    }
  };

  useEffect(() => {
    if (popupName === "add-folder") {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [popupName]);

  return (
    <div>
      <Tooltip title="Add Folder" onClick={handleOpenPopup}>
        <IconButton size="small">
          <CreateNewFolderOutlined sx={{ color: "white" }} />
        </IconButton>
      </Tooltip>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>New Folder</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Folder Name"
            fullWidth
            size="small"
            variant="standard"
            sx={{ width: "400px" }}
            autoComplete="off"
            value={newFolderName}
            onChange={handleNewFolderNameChange}
            required
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleAddNewFolder}>OK</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
