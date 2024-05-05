/* eslint-disable no-unused-vars */
import React from "react";
import { Box, Grid } from "@mui/material";
import FolderList from "../components/Note/FolderList";
import { Outlet } from "react-router-dom";

export default function Note() {
  return (
    <>
      <Box sx={{ backgroundColor: "#002333" }}>
        <Grid
          container
          sx={{
            height: "100vh",
            boxShadow: "0 0 15px 0 rgb(193 193 193 / 60%)",

            color: "white",
          }}
        >
          <Grid item xs={3} sm md sx={{ height: "100%" }}>
            <FolderList />
          </Grid>
          <Grid item xs={9} sm md sx={{ height: "100%" }}>
            <Outlet />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
