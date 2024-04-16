/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "axios"; // Import Axios
import { ENDPOINT } from "../../ultil/constants";
import { Box, Typography } from "@mui/material/";

export default function Blog() {
  const [blogData, setBlogData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${ENDPOINT}/blogs`);
        setBlogData(response.data); // Set the fetched data to the state
      } catch (error) {
        console.error("Error fetching data:", error);
        throw error; // Ensure the error is thrown for the caller to handle
      }
    };

    fetchData(); // Call the fetchData function
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <>
      {blogData.map((blog, index) => (
        <Box key={index}>
          <Typography>{blog.email}</Typography>
          <Typography>{blog.content}</Typography>
        </Box>
      ))}
    </>
  );
}
