/* eslint-disable no-unused-vars */
import React from "react";
import { Grid } from "@mui/material";
import Header from "../components/header/Header";
import FolderList from "../components/Note/FolderList";
import NoteList from "../components/Note/NoteList";

export default function Note() {
  return (
    <>
      <Header />
      <Grid
        container
        sx={{
          height: "50vh",
          boxShadow: "0 0 15px 0 rgb(193 193 193 / 60%)",
        }}
      >
        <Grid item xs={3} sx={{ height: "100%" }}>
          <FolderList />
        </Grid>
        <Grid item xs={9} sx={{ height: "100%" }}>
          <NoteList />
        </Grid>
      </Grid>
    </>
  );
}
