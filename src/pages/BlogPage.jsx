/* eslint-disable no-unused-vars */
import React from "react";
import Header from "../components/header/Header";
import { Box } from "@mui/material";
import Blog from "../components/Blog/Blog";

export default function BlogPage() {
  return (
    <>
      <Box sx={{ backgroundColor: "#002333" }}>
        <Header />
        <Box sx={{ backgroundColor: "red", marginTop: "10vh" }}>
          <Blog />
        </Box>
      </Box>
    </>
  );
}
