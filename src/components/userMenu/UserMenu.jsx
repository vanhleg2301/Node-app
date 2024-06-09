/* eslint-disable no-unused-vars */
import React from "react";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { Avatar, Typography, Menu, MenuItem } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";

export default function UserMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const {
    user: { displayName, photoURL, auth },
  } = useContext(AuthContext);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleProfile = () => {
    navigate("/profile");
  };

  const handleLogout = () => {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this folder?"
    );
    if (!isConfirmed) {
      handleClose();
    } else {
      auth.signOut();
    }
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
        }}
        onClick={handleClick}
      >
        <Typography>{displayName}</Typography>
        <Avatar alt="avatar" src={photoURL} sx={{ width: 24, height: 24 }} />
      </Box>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleProfile}>Profile</MenuItem>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </>
  );
}
