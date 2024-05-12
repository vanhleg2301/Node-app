/* eslint-disable no-unused-vars */
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import PlayIcon from "../PlayIcon/PlayIcon";
import { getAuth } from "firebase/auth";

const buttonItem = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Writing",
  "Film & Video",
  "Craft",
  "Graphic Design",
];
const displayItem = ["Meo 1", "Meo 2", "Meo 3", "Meo 4"];

export default function ThousandsOfClasses() {
  const navigate = useNavigate();
  const auth = getAuth();

  const handleShareWithFacebook = () => {
    if (!auth.currentUser) {
      alert("Please sign in to share with Facebook.");
      navigate("/login");
      return;
    }

    // Nếu người dùng đã đăng nhập, tạo một bài viết chia sẻ trên Facebook
    const urlToShare = "https://willowy-bonbon-24a9d4.netlify.app/";
    const facebookProvider = new auth.FacebookAuthProvider();

    auth.currentUser
      .linkWithPopup(facebookProvider)
      .then((result) => {
        window.open(
          `https://www.facebook.com/sharer/sharer.php?u=${urlToShare}`,
          "Share with Facebook",
          "width=600,height=400"
        );
      })
      .catch((error) => {
        console.error("Error sharing with Facebook:", error);
      });
  };

  return (
    <>
      <Grid container spacing={0}>
        <Grid item xs={1}></Grid>
        <Grid item xs={10} sx={{ textAlign: "center" }}>
          <Box className="wrap-body-1">
            <Box className="wrap-body-button" sx={{ margin: "60px" }}>
              {buttonItem.map((item, index) => (
                <Button
                  onClick={{}}
                  key={index}
                  className="wrap-body-button-item"
                  variant="outlined"
                  color="primary"
                  sx={{
                    margin: "7px",
                    color: "#FFFFFF",
                    borderColor: "#FFFFFF",
                    borderRadius: "20px",
                    borderWidth: "3px",
                    fontWeight: "bold",
                    "&:hover": {
                      backgroundColor: "#00FF84",
                      color: "#272828",
                      borderColor: "#00FF84",
                    },
                  }}
                >
                  {item}
                </Button>
              ))}
            </Box>

            <Box
              className="wrap-body-button-display"
              sx={{ marginTop: "30px" }}
            >
              <Grid container spacing={2}>
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
                            image="./img/ccad784fdc596a3ce032e47b8b6738f9-removebg-preview.png"
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
                        <Typography gutterBottom variant="h5" component="div">
                          {item}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Lizards are a widespread group of squamate reptiles,
                          with over 6,000 species, ranging across all continents
                          except Antarctica
                        </Typography>
                      </CardContent>
                      <CardActions sx={{ justifyContent: "center" }}>
                        <Button
                          sx={{
                            background: "rgba(0, 255, 132, 1)",
                            color: "#002333",
                            "&:hover": {
                              background: "rgba(0, 255, 132, 0.8)",
                            },
                          }}
                          variant="contained"
                          onClick={handleShareWithFacebook}
                        >
                          Share
                        </Button>
                        <Button
                          sx={{
                            background: "rgba(0, 255, 132, 1)",
                            color: "#002333",
                            "&:hover": {
                              background: "rgba(0, 255, 132, 0.8)",
                            },
                          }}
                          variant="contained"
                          component={Link}
                          to="/blog"
                        >
                          More
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>
    </>
  );
}
