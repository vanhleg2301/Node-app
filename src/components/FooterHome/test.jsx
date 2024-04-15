/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Box, Typography, Grid } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import "./FooterHome.css";

export default function FooterHome() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const questions = [
    {
      question: "What is Skillshare?",
      answer:
        "Skillshare is an online learning community with thousands of classes for creative and curious people, on topics including illustration, design, photography, video, freelancing, and more. On Skillshare, you’ll find inspiration from hands-on classes and teachers at the top of their creative fields, so you can take the next step in your creative journey.",
    },
    {
      question: "What is included in my Skillshare membership?",
      answer:
        "As a Skillshare member, you’ll have unlimited access to all Skillshare classes to watch when and where you want, and additional features such as offline viewing, access to a vibrant community of lifelong learners, and so much more.",
    },
  ];

  const toggleExpand = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  return (
    <>
      <Box className="FooterHome">
        <Typography
          sx={{ textAlign: "center", fontSize: "50px", paddingTop: "70px" }}
        >
          Frequently Asked Questions
        </Typography>
        <Grid container spacing={0}>
          <Grid item xs={3} md={3} sm={3}></Grid>
          <Grid item xs={6} md={6} sm={6}>
            {questions.map((item, index) => (
              <Box key={index}>
                <hr style={{ borderTop: "3px solid black", width: "100%" }} />
                <Typography
                  variant="body1"
                  color="initial"
                  sx={{
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                  onClick={() => toggleExpand(index)}
                >
                  <Box sx={{ marginLeft: "30px" }}>{item.question}</Box>
                  <Box sx={{ marginLeft: "10px", marginRight: "30px" }}>
                    {expandedIndex === index ? <RemoveIcon /> : <AddIcon />}
                  </Box>
                </Typography>
                {expandedIndex === index && (
                  <>
                    <Typography>{item.answer}</Typography>
                  </>
                )}
              </Box>
            ))}
          </Grid>
          <Grid item xs={3} md={3} sm={3}></Grid>
        </Grid>
      </Box>
    </>
  );
}
