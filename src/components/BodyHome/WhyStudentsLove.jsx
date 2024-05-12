/* eslint-disable no-unused-vars */
import { Box, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";

const testimonials = [
  {
    content:
      "Skillshare has allowed me to learn Adobe Suite in a way that following random YouTube videos wouldn’t have.",
    author: "Alex W.",
  },
  {
    content:
      "Skillshare helped me grow my art business beyond my wildest dreams! Turned it from a hobby to a passion project to a side hustle.",
    author: "Julie W.",
  },
  {
    content:
      "The lesson format is better as opposed to structureless YouTube videos. While Youtube is good, Skillshare videos are more structured, lesson-based, and finish with a call to action that makes sure I complete the work.",
    author: "P.J.",
  },
  {
    content:
      "Skillshare gave me insider knowledge and actionable steps to complete in order to reach my goal of becoming a better more efficient freelancer.",
    author: "Natasha M.",
  },
];

export default function WhyStudentsLove() {
  return (
    <>
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <Box className="wrap-body-4">
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
                Why Students Love Skillshare
              </Typography>
            </Box>
            {testimonials.map((testimonial, index) => (
              <Box key={index} sx={{ marginTop: "40px" }}>
                <Grid container spacing={0}>
                  <Grid item xs={2} sm={2} md={3}></Grid>
                  <Grid item xs={8} sm={8} md={6}>
                    <Box
                      sx={{
                        position: "relative",
                        width: "100%",
                        backgroundColor: "#ffffff",
                        borderRadius: "20px",
                        padding: "60px 30px 60px 30px",
                      }}
                    >
                      <CardMedia
                        component="img"
                        alt="img"
                        title="image"
                        image="https://d9hhrg4mnvzow.cloudfront.net/join.skillshare.com/learn/3acfa0c2-sk-icon-leftquote.svg"
                        sx={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: 42,
                          height: 30,
                        }}
                      />

                      <Typography>
                        <Typography
                          sx={{
                            fontWeight: "900",
                            fontSize: "15px",
                            marginBottom: "10px",
                          }}
                        >
                          {testimonial.content}
                        </Typography>
                        — {testimonial.author}
                      </Typography>

                      <CardMedia
                        component="img"
                        alt="img"
                        title="image"
                        image="https://d9hhrg4mnvzow.cloudfront.net/join.skillshare.com/learn/3acfa0c2-sk-icon-leftquote.svg"
                        sx={{
                          position: "absolute",
                          bottom: 0,
                          right: 0,
                          width: 42,
                          height: 30,
                          transform: "rotate(180deg)",
                        }}
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={2} sm={2} md={3}></Grid>
                </Grid>
              </Box>
            ))}
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
