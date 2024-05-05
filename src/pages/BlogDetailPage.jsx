/* eslint-disable no-unused-vars */
import { Box } from "@mui/material";
import React from "react";
import BlogDetail from "../components/Blog/BlogDetail";
import Header from "../components/header/Header";

export default function BlogDetailPage() {
  return (
    <>
      <Box sx={{ backgroundColor: "#002333" }}>
        <Box sx={{ backgroundColor: "white" }}>
          <BlogDetail />
        </Box>
      </Box>
    </>
  );
}
