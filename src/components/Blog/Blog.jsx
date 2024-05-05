/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import { RequestGet } from "../../ultil/request";
import {
  Avatar,
  Box,
  Container,
  Grid,
  Paper,
  Tooltip,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import "./Blog.css";

export default function Blog() {
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await RequestGet(`blogs`, {});
        setBlogData(response);
        console.table(response);
      } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
      }
    };

    fetchData();
  }, []);
  const {
    user: { displayName, photoURL, auth },
  } = useContext(AuthContext);

  return (
    <>
      <Box sx={{ color: "white" }}>
        <Container
          maxWidth="xl"
          className="blog"
          sx={{
            backgroundColor: "#002333",
            width: "100%",
            paddingTop: "30px",
            paddingBottom: "30px",
          }}
        >
          <Grid container spacing={0}>
            <Grid items xs={12} sm={12} md={3}>
              <Box maxWidth="md">
                <iframe
                  width="100%"
                  style={{ maxWidth: "100%", height: "40vh" }}
                  src="https://www.youtube.com/embed/zyFihxoVISk"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </Box>
            </Grid>
            <Grid items xs={12} sm={12} md={1}></Grid>
            <Grid items xs={12} sm={12} md={8}>
              <Typography sx={{ fontSize: "20px" }}>
                Or
                <span style={{ fontWeight: "bolder", color: "#00ff84" }}>
                  i
                </span>
                g
                <span style={{ fontWeight: "bolder", color: "#00ff84" }}>
                  i
                </span>
                nal
              </Typography>
              <Typography sx={{ fontSize: "40px", fontWeight: "bolder" }}>
                Music Fundamentals: Explore & Create Your Unique Sound
              </Typography>
              <Box>
                <Link
                  sx={{
                    textDecoration: "none",
                  }}
                  to={`detail`}
                >
                  <Tooltip title={"avatar"}>
                    <Avatar src={displayName} />
                  </Tooltip>
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Container>
        <Container
          maxWidth="xl"
          className="blog"
          sx={{
            backgroundColor: "#3722d3",
            height: "100px",
          }}
        >
          <Box>Watch this class and thousands more</Box>
        </Container>
      </Box>
    </>
  );
}
