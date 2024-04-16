/* eslint-disable no-unused-vars */
import React from "react";
import { Box, Grid } from "@mui/material";
import Header from "../components/header/Header";
import FolderList from "../components/Note/FolderList";
import NoteList from "../components/Note/NoteList";
import { Outlet } from "react-router-dom";

export default function Note() {
  return (
    <>
      <Box sx={{ backgroundColor: "#002333" }}>
        <Header />
        <Grid
          container
          sx={{
            height: "100vh",
            boxShadow: "0 0 15px 0 rgb(193 193 193 / 60%)",
            marginTop: 3,
            color: "white",
          }}
        >
          <Grid item xs={3} sm md sx={{ height: "100%" }}>
            <FolderList
              folders={[
                { id: 1, name: "Plan" },
                { id: 2, name: "Plan for holiday" },
              ]}
            />
          </Grid>
          <Grid item xs={9} sm md sx={{ height: "100%" }}>
            <Outlet />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
