/* eslint-disable no-unused-vars */
import React from "react";
import "./BodyHome.css";

import { Box, Typography } from "@mui/material";
import MadeWithSkillshare from "./MadeWithSkillshare";
import DesignedByCreatives from "./DesignedByCreatives";
import WhyStudentsLove from "./WhyStudentsLove";
import CreativeLearning from "./CreativeLearning";
import ThousandsOfClasses from "./ThousandsOfClasses";

export default function BodyHome() {
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

        <ThousandsOfClasses />

        <CreativeLearning />

        <MadeWithSkillshare />

        <DesignedByCreatives />

        <WhyStudentsLove />
      </Box>
    </>
  );
}
