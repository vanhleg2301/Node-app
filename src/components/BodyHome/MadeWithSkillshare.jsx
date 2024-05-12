/* eslint-disable no-unused-vars */
import * as React from "react";
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Card, CardActions, CardContent, CardMedia } from "@mui/material";
import { Link } from "react-router-dom";
import PlayIcon from "../PlayIcon/PlayIcon";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MapsUgcOutlinedIcon from "@mui/icons-material/MapsUgcOutlined";

const displayItem = ["Meo 1", "Meo 2", "Meo 3", "Meo 4"];

const imgs = [
  "https://static.skillshare.com/uploads/project/255695/cover_1242_d81eeb81ad726b8eec98d56bff322d3e.png",
  "https://static.skillshare.com/uploads/project/212568/cover_1242_d39d63eea853fa28540d6711c4db2036.jpg",
  "https://d9hhrg4mnvzow.cloudfront.net/join.skillshare.com/learn/c94320b8-sk-projects-katherine-f_107p05407o054000000028.png",
  "https://d9hhrg4mnvzow.cloudfront.net/join.skillshare.com/learn/f956b171-sk-projects-natalie-s_107o05707o054000001028.png",
];

const generateRandomNumber = () => Math.floor(Math.random() * 100) + 1; // Generate a random number between 1 and 10

export default function MadeWithSkillshare() {
  return (
    <>
      <Grid container>
        <Grid item xs={12} sm={12} md={1}></Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={10}
          sx={{
            backgroundColor: "rgb(13 102 143)",
            borderRadius: "10px",
            padding: "60px",
            marginTop: "70px",
          }}
        >
          <Grid container spacing={0}>
            <Grid item xs={12}>
              <Box className="wrap-body-3">
                <Box
                  style={{
                    textAlign: "center",
                    color: "white",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "50px",
                      fontFamily: "Arial, sans-serif",
                    }}
                  >
                    Made with Skillshare
                  </Typography>
                  <Typography
                    sx={{
                      marginTop: "30px",
                      marginBottom: "30px",
                      fontSize: "25px",
                      fontFamily: "Arial, sans-serif",
                      textAlign: "center",
                    }}
                  >
                    Explore class projects from Skillshare’s creative community.
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
          <Grid
            container
            spacing={2}
            style={{
              alignItems: "center", // căn giữa theo trục Y
              justifyContent: "center", //căn giữa theo trục X
              textAlign: "center",
            }}
          >
            {displayItem.map((item, index) => (
              <Grid item xs={6} sm={6} md={3} key={index}>
                <Card
                  sx={{
                    borderRadius: "10px",
                    boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.2)",
                    transition: "box-shadow 0.3s ease-in-out",
                    "&:hover": {
                      boxShadow: "0px 0px 15px 5px rgba(0,0,0,0.3)",
                    },
                  }}
                >
                  <Link
                    sx={{
                      textDecoration: "none",
                      "&:hover": {
                        boxShadow: "0px 0px 15px 5px rgba(0,0,0,0.3)",
                      },
                    }}
                    component={Link}
                    to="/blog"
                  >
                    <Box
                      sx={{
                        position: "relative",
                        "&:hover > div": {
                          display: "flex", // Show the inner Box when hovering over the outer Box
                        },
                      }}
                    >
                      <CardMedia
                        component="img"
                        alt="green iguana"
                        height="140"
                        image={imgs[index]}
                      />

                      <Box
                        sx={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                          display: "none",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <PlayIcon />
                      </Box>
                    </Box>
                  </Link>

                  <CardContent>
                    <Typography gutterBottom component="div">
                      {item}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Typography>
                      <FavoriteBorderIcon />
                      {generateRandomNumber()}
                    </Typography>
                    <Typography>
                      <MapsUgcOutlinedIcon /> {generateRandomNumber()}
                    </Typography>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={12} md={1}></Grid>
    </>
  );
}
