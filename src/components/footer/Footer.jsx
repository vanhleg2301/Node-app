/* eslint-disable no-unused-vars */
import { Box, Grid, List, MenuItem, Select, Typography } from "@mui/material";
import React from "react";
import { Facebook, Instagram, Twitter, YouTube } from "@mui/icons-material";
import LanguageIcon from "@mui/icons-material/Language";
import { Link } from "react-router-dom";
import styled from "styled-components";

const companies = ["About", "Careers", "Press", "Blog"];

const Communities = [
  "Team Plans",
  "Gift Membership Cards",
  " Corporate Gift Cards",
  "Scholarships",
];

const teachers = [
  "Become a Teacher",
  " Teacher Help Center",
  "Teacher Rules",
  "Requirements",
];

const mobiles = ["App Store", "CH Play"];

const helps = [
  "Help",
  "Privacy",
  "Terms",
  "Your Privacy ChoicesYour",
  "Privacy Choices",
];

const FooterWrapper = styled(Box)`
  // position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  &:hover {
    color: #00ff84;
  }
`;

export default function Footer() {
  return (
    <FooterWrapper>
      <Box
        sx={{
          backgroundColor: "#002333",
          color: "white",
          position: "relative",
          textAlign: "center",
        }}
      >
        <Grid container spacing={0} sx={{ paddingTop: "30px" }}>
          <Grid item xs={3} sm={3} md={3} lg={3} xl={3} xxl={3}>
            <h5>Company</h5>

            {companies.map((company, index) => (
              <List key={index}>
                <StyledLink>{company}</StyledLink>
              </List>
            ))}
          </Grid>
          <Grid item xs={3} sm={3} md={3} lg={3} xl={3} xxl={3}>
            <h5>Community</h5>
            {Communities.map((community, index) => (
              <List key={index}>
                <StyledLink>{community}</StyledLink>
              </List>
            ))}
          </Grid>
          <Grid item xs={3} sm={3} md={3} lg={3} xl={3} xxl={3}>
            <h5>Teaching</h5>
            {teachers.map((teacher, index) => (
              <List key={index}>
                <StyledLink>{teacher}</StyledLink>
              </List>
            ))}
          </Grid>
          <Grid item xs={3} sm={3} md={3} lg={3} xl={3} xxl={3}>
            <h5>Mobile</h5>
            {mobiles.map((mobile, index) => (
              <List key={index}>
                <StyledLink>{mobile}</StyledLink>
              </List>
            ))}
          </Grid>
        </Grid>

        <Grid container spacing={0} sx={{ marginTop: "30px" }}>
          <Grid item xs={1} sm={1} md={1}></Grid>
          <Grid item xs={10} sm={10} md={10}>
            <Box
              sx={{
                width: "100%",
                height: "1px",
                backgroundColor: "#00ff84",
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 1,
              }}
            />
          </Grid>
          <Grid item xs={1} sm={1} md={1}></Grid>
        </Grid>

        <Grid container spacing={0}>
          {/* Column 1 */}
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "20px",
              backgroundColor: "#002333",
            }}
          >
            <Typography
              variant="body2"
              sx={{ color: "#fff", marginBottom: "20px" }}
            >
              ©Kokonutleee, Inc. 2024
            </Typography>
            {/* List of helps */}
            <Box sx={{ display: "flex", flexDirection: "row", gap: "10px" }}>
              {helps.map((help, index) => (
                <List key={index} sx={{ marginRight: "10px" }}>
                  <StyledLink>{help}</StyledLink>
                </List>
              ))}
            </Box>
          </Grid>
          {/* Column 2 */}
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            sx={{
              padding: "20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                backgroundColor: "#002333",
                color: "white",
                display: "flex",
                alignItems: "center",
                padding: "10px",
              }}
            >
              {/* Social media icons */}
              <Box sx={{ display: "flex", marginRight: "20px" }}>
                <Facebook />
                <Instagram />
                <Twitter />
                <YouTube />
              </Box>
              {/* Language selector */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  color: "#fff",
                  border: "1px solid white",
                  padding: "5px 5px",
                  borderRadius: "5px",
                }}
              >
                <LanguageIcon />
                <Select
                  variant="outlined"
                  defaultValue="en"
                  sx={{ color: "#fff" }}
                >
                  <MenuItem value="en">English</MenuItem>
                  <MenuItem value="fr">French</MenuItem>
                  <MenuItem value="es">Spanish</MenuItem>
                </Select>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </FooterWrapper>
  );
}
