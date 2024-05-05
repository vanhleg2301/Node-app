/* eslint-disable no-unused-vars */
import React from "react";
import {
  Container,
  Typography,
  Paper,
  Grid,
  Avatar,
  Button,
} from "@mui/material";
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const {
    user: { displayName, photoURL, auth },
  } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1); // Quay lại trang trước đó khi nút "Back" được nhấn
  };
  return (
    <Container maxWidth="md">
      <Paper sx={{ padding: 2, marginTop: 4 }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={3} textAlign="center">
            <Avatar
              sx={{ width: 120, height: 120, margin: "auto" }}
              src={photoURL}
            />
            <Typography variant="h5" sx={{ marginTop: 2 }}>
              {displayName}
            </Typography>
            <Typography variant="subtitle1" sx={{ color: "text.secondary" }}>
              Web Developer
            </Typography>
          </Grid>
          <Grid item xs={12} md={9}>
            <Typography variant="h6">About {displayName}</Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              felis nibh, volutpat vel sapien eget, tincidunt scelerisque
              libero. Integer mattis nunc id ultrices consequat. Duis volutpat
              massa id semper scelerisque. Duis eu libero et neque venenatis
              posuere.
            </Typography>
            <Button
              variant="contained"
              sx={{ marginTop: 2 }}
              onClick={handleGoBack}
            >
              Back
            </Button>

            <Button variant="contained" sx={{ marginTop: 2, marginLeft: 2 }}>
              Edit Profile
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default ProfilePage;
