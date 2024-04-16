/* eslint-disable no-unused-vars */
import React from "react";
import "./BodyHome.css";

import {
  ImageList,
  ImageListItem,
  Box,
  Grid,
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
} from "@mui/material";
import ButtonHome from "../ButtonHome/ButtonHome";
import PlayIcon from "../PlayIcon/PlayIcon";
import { FacebookAuthProvider, getAuth } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";

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

const itemSvg = [
  "https://d9hhrg4mnvzow.cloudfront.net/join.skillshare.com/learn/53c52f3c-sk-icon-offline.svg",
  "https://d9hhrg4mnvzow.cloudfront.net/join.skillshare.com/learn/c69aee3e-sk-icon-watch.svg",
  "https://d9hhrg4mnvzow.cloudfront.net/join.skillshare.com/learn/997408bc-sk-icon-learn-by-doing.svg",
  "https://d9hhrg4mnvzow.cloudfront.net/join.skillshare.com/learn/8a92628a-sk-icon-applyforascholarship.svg",
];

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

export default function BodyHome() {
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
      <Box className="wrap-body" sx={{ fontWeight: "900" }}>
        <Box
          style={{ textAlign: "center", color: "white", paddingTop: "100px" }}
        >
          <Typography
            sx={{
              fontSize: "50px",
              fontFamily:
                "'GT-Walshiem-Pro-Bold', 'GT-Walshiem-Pro-Bold IE', Arial, sans-serif;",
            }}
          >
            Thousands of classes - Beginner to pro
          </Typography>
        </Box>

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
                            with over 6,000 species, ranging across all
                            continents except Antarctica
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
                  With real world projects to create and online classes that fit
                  a busy routine, <br />
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
      </Box>
    </>
  );
}
