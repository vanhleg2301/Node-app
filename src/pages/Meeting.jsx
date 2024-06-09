/* eslint-disable no-unused-vars */
import { Box, Grid } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import NavMeeting from "../components/meeting/NavMeeting";

export default function Meeting() {
  return (
    <Box sx={{ backgroundColor: "white" }}>
      <Grid
        container
        sx={{
          height: "100vh",
          boxShadow: "0 0 15px 0 rgb(193 193 193 / 60%)",
          color: "black",
        }}
      >
        <Grid item xs={3} sm={3} md={3}>
          <NavMeeting />
        </Grid>

        <Grid
          item
          xs={9}
          sm={9}
          md={9}
          sx={{
            height: "calc(100vh - 60px)", // Adjust height considering marginTop
            overflow: "auto", // Enable scrolling for the Outlet
            borderRadius: "10px",
          }}
        >
          <Outlet />
        </Grid>
      </Grid>
    </Box>
  );
}
