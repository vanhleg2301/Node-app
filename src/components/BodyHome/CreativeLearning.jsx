/* eslint-disable no-unused-vars */
import { Box, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";

const itemSvg = [
  "https://d9hhrg4mnvzow.cloudfront.net/join.skillshare.com/learn/53c52f3c-sk-icon-offline.svg",
  "https://d9hhrg4mnvzow.cloudfront.net/join.skillshare.com/learn/c69aee3e-sk-icon-watch.svg",
  "https://d9hhrg4mnvzow.cloudfront.net/join.skillshare.com/learn/997408bc-sk-icon-learn-by-doing.svg",
  "https://d9hhrg4mnvzow.cloudfront.net/join.skillshare.com/learn/8a92628a-sk-icon-applyforascholarship.svg",
];

const displayItem = ["Meo 1", "Meo 2", "Meo 3", "Meo 4"];

export default function CreativeLearning() {
  return (
    <>
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <Box className="wrap-body-2">
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
                Creative Learning Made Easy
              </Typography>
            </Box>
            <Box>
              <Grid container spacing={2}>
                <Grid item xs={1}></Grid>
                <Grid item xs={10} sx={{ marginTop: "50px" }}>
                  <Grid container spacing={2}>
                    {displayItem.map((item, index) => (
                      <Grid item xs={6} sm={6} md={3} key={index}>
                        <CardMedia
                          component="img"
                          alt="green iguana"
                          height="200"
                          src={itemSvg[index]}
                        />
                        <CardContent>
                          <Typography
                            gutterBottom
                            variant="h5"
                            component="div"
                            color="white"
                            sx={{ textAlign: "center" }}
                          >
                            {item}
                          </Typography>
                          <Typography
                            variant="body2"
                            color="white"
                            sx={{ textAlign: "center" }}
                          >
                            Thousands of creative classes. Beginner to pro.
                          </Typography>
                        </CardContent>
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
                <Grid item xs={1}></Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
