/* eslint-disable no-unused-vars */
import React from "react";
import { useEffect, useState } from "react";
import { CardMedia, Box, Button, Grid } from "@mui/material";
import "./HeaderHome.css";

export default function HeaderHome() {
  const [header, setHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setHeader(true);
      } else {
        setHeader(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box
      className=""
      sx={{
        // display: header ? "block" : "none",
        opacity: header ? 1 : 0,
        transition: "opacity 0.5s ease",
        position: "fixed",
        top: "0",
        cursor: "pointer",
        backgroundColor: "white",
        color: "black",
        width: "100%",
        padding: "30px 20px",
        zIndex: 9999,
      }}
    >
      <Grid container spacing={0}>
        <Grid item xs={4} md={4} sm={4}>
          <Box className="logo">
            <Box className="img-logo">
              <CardMedia
                component="img"
                alt="img"
                title=""
                image="./img/4b104382-sk-primary-logo-blk-2_102t01n02t01e000004028.png"
              />
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={4}
          md={4}
          sm={4}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Box sx={{ textAlign: "center", fontSize: "60px" }}>
            <h1 className="header-text">Start your free month</h1>
          </Box>
        </Grid>
        <Grid
          item
          xs={4}
          md={4}
          sm={4}
          sx={{ display: "flex", justifyContent: "flex-end" }}
        >
          <Box sx={{ paddingRight: "20px" }}>
            <Button
              sx={{
                background: "rgba(0, 255, 132, 1)",
                color: "#002333",
                "&:hover": {
                  background: "rgba(0, 255, 132, 0.8)",
                },
              }}
              variant="contained"
            >
              Get your free month
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
