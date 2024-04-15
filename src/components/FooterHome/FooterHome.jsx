/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
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
            <Accordion
              sx={{ background: "rgba(117, 216, 251, 1)", fontSize: "20px" }}
              key={index}
              expanded={expandedIndex === index}
              onChange={() => toggleExpand(index)}
            >
              <AccordionSummary
                expandIcon={
                  expandedIndex === index ? <RemoveIcon /> : <AddIcon />
                }
                aria-controls={`panel${index}-content`}
                id={`panel${index}-header`}
              >
                <Typography
                  variant="body1"
                  color="initial"
                  sx={{ fontSize: "24px" }}
                >
                  {item.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ fontSize: "18px" }}>{item.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Grid>
        <Grid item xs={3} md={3} sm={3}></Grid>
      </Grid>
    </Box>
  );
}
