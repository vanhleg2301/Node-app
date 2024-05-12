/* eslint-disable no-unused-vars */
import { Box, Grid, ImageList, ImageListItem, Typography } from "@mui/material";
import React from "react";
import ButtonHome from "../ButtonHome/ButtonHome";

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
  },

  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
  },
];

export default function DesignedByCreatives() {
  return (
    <>
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <Box className="wrap-body-3">
            <Box
              style={{
                textAlign: "center",
                color: "white",
                paddingTop: "100px",
              }}
            >
              <Typography
                sx={{
                  fontSize: "50px",
                  fontFamily: "Arial, sans-serif",
                }}
              >
                Designed by Creatives, for Creatives
              </Typography>
              <Typography
                sx={{
                  marginTop: "30px",
                  fontSize: "25px",
                  fontFamily: "Arial, sans-serif",
                  textAlign: "center",
                }}
              >
                With real world projects to create and online classes that fit a
                busy routine, <br />
                Skillshare makes real learning and growth possible.
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={0}>
            <Grid item xs={3} md={3}></Grid>
            <Grid item xs={6} md={6}>
              <ImageList
                sx={{ width: "100%", height: 500, marginTop: "70px" }}
                cols={3}
                rowHeight={164}
              >
                {itemData.map((item) => (
                  <ImageListItem key={item.img}>
                    <img
                      srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                      src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                      alt={item.title}
                      loading="lazy"
                    />
                  </ImageListItem>
                ))}
              </ImageList>
            </Grid>
            <Grid item xs={3} md={3}></Grid>
          </Grid>
          <Grid container spacing={0} sx={{ marginTop: "40px" }}>
            <Grid item xs={12} sm={12} md={4}></Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={4}
              sx={{
                display: "flex",
                justifyContent: "center",
                height: "56px",
              }}
            >
              <ButtonHome />
            </Grid>
            <Grid item xs={12} sm={12} md={4}></Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
