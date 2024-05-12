/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import { Avatar, Box, Button, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import { AddCircleOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function BlogDetail() {
  const [isFollowed, setIsFollowed] = useState(false);
  const [followerCount, setFollowerCount] = useState(0);

  const handleFollowClick = () => {
    setIsFollowed(true);
    setFollowerCount((prevCount) => prevCount + 1);
  };
  return (
    <Box sx={{ width: "100%", padding: "20px" }}>
      <Grid container spacing={3}>
        {/* Avatar and profile info */}
        <Grid item xs={12} md={3}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar
              sx={{ width: 120, height: 120, margin: "auto" }}
              // src={photoURL}
            />

            {/* name - job */}
            <Box textAlign={"center"}>
              <Typography variant="h5" sx={{ marginTop: 2 }}>
                Vanh
              </Typography>
              <Button component={Link} to={`feedback`}>
                Feedback
              </Button>
              <Typography variant="subtitle1" sx={{ color: "text.secondary" }}>
                Web Developer
              </Typography>
              <Typography variant="subtitle1" sx={{ color: "text.secondary" }}>
                Teacher
              </Typography>
            </Box>
            {/* Follow */}
            {!isFollowed && (
              <Box sx={{ marginTop: 2 }}>
                <Button
                  variant="outlined"
                  startIcon={<AddCircleOutline />}
                  onClick={handleFollowClick}
                >
                  Follow
                </Button>
              </Box>
            )}
            {isFollowed && (
              <Typography sx={{ marginTop: 2 }}>
                <Button variant="outlined">Followed</Button>
              </Typography>
            )}

            <Box
              sx={{
                marginTop: 2,
                display: "flex",
                gap: "10px",
                textAlign: "center",
                borderTop: "2px solid #ccc",
                borderBottom: "2px solid #ccc",
                paddingTop: "10px", // Add some padding to make the borders look better
                paddingBottom: "10px",
              }}
            >
              <Box>
                <Typography variant="h6">{followerCount}</Typography>
                <Typography>Follower</Typography>
              </Box>
              <Box>
                <Typography variant="h6">
                  {Math.floor(Math.random() * 100)}
                </Typography>
                <Typography>Following</Typography>
              </Box>
            </Box>
          </Box>
        </Grid>

        {/* About Me */}
        <Grid item xs={12} md={9}>
          <Box
            sx={{
              backgroundColor: "#f4f4f4",
              padding: "20px",
              borderRadius: "5px",
            }}
          >
            <Typography variant="h4" sx={{ marginBottom: 2 }}>
              About Me
            </Typography>
            <Typography>
              It’s not often one encounters an imagination with the depth and
              prolificacy of Jacob Collier’s. The London-based 28-year-old is
              dubbed by many as one of the most innovative musicians of his
              generation. <br />
              In 2012, Jacob's self-made YouTube videos achieved legendary
              status in the music world, attracting the praise of such
              luminaries as Herbie Hancock and Quincy Jones, who manages Jacob
              to this day. Jacob’s debut album, In My Room, crafted entirely in
              his room at home, went on to win two Grammys. His success has led
              to musical collaborators and fans including the likes of Coldplay,
              John Mayer, Ty Dolla $ign, Tori Kelly, Daniel Caesar, Charlie
              Puth, Jessie Reyez, T-Pain, and SZA (to name a few). <br />
              In January of 2018, Jacob began designing and creating a recording
              project on an unprecedented scale – a quadruple album called
              DJESSE: 50 songs, divided between four volumes, with each
              operating within a separate musical universe of sound, style, and
              genre. Scattered across the four volumes are 30+ collaborators
              from across every facet of the music world. So far, Djesse Volumes
              1, 2, & 3 have all earned him Grammy wins. With 5 wins from 7
              nominations across the 3 records including a nomination for Album
              Of The Year for Vol. 3. On June 10, 2022 Jacob released his first
              new song of 2022, "Never Gonna Be Alone", which features Lizzy
              McAlpine on vocals, with whom the song was co-written, alongside
              John Mayer on guitar. Regarding the track, Collier said "It speaks
              to my experience of the world as a hugely beautiful and fragile
              place", adding that the song "has helped me process some of the
              grief I think we're all feeling for our pasts and futures, in a
              myriad of different ways”.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
