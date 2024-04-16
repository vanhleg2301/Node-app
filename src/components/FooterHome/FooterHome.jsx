/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  CardMedia,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import "./FooterHome.css";
import ButtonHome from "../ButtonHome/ButtonHome";
import { Link } from "react-router-dom";

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
    {
      question: "What can I learn from Skillshare?",
      answer:
        "Skillshare has thousands of classes in everything from graphic design to cooking, productivity, filmmaking, content creation, UI/UX design, marketing, crafts, music, social media, entrepreneurship. If it's something creative, you can learn it on Skillshare.",
    },
    {
      question: "What happens after my trial is over?",
      answer:
        "After your trial ends, your annual Skillshare membership begins. You’ll be billed for the year in full, so you can enjoy continuous access to creative classes year-round.",
    },
    {
      question: "Can I teach on Skillshare?",
      answer:
        "Yes! Skillshare teachers are everyday creatives and professionals who want to share their passion, and the skills and experience they’ve gained in their creative disciplines with a community of eager learners. To learn more about teaching on Skillshare, visit our Help Center.",
    },
  ];

  const imageUrls = [
    "https://d9hhrg4mnvzow.cloudfront.net/join.skillshare.com/learn/3811fccc-kisspng-computer-icons-logo-of-the-bbc-bbc-world-news-uc-browser-5b35c151c00e08-1.svg",
    "https://d9hhrg4mnvzow.cloudfront.net/join.skillshare.com/learn/42d64c93-image-292.svg",
    "https://d9hhrg4mnvzow.cloudfront.net/join.skillshare.com/learn/463552ef-dlf-1.svg",
    "https://d9hhrg4mnvzow.cloudfront.net/join.skillshare.com/learn/ca51db59-1200px-newyorktimes-1.svg",
    "https://d9hhrg4mnvzow.cloudfront.net/join.skillshare.com/learn/8ecc097f-cnbc-logo-white-1.svg",
    "https://d9hhrg4mnvzow.cloudfront.net/join.skillshare.com/learn/5ec32aca-wsj-logo-transparent-1.svg",
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
        <Grid item xs={2} sm={2} md={2}></Grid>
        <Grid item xs={8} sm={8} md={8}>
          {questions.map((item, index) => (
            <Accordion
              sx={{
                background: "rgba(117, 216, 251, 1)",
                fontSize: "20px",
              }}
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
        <Grid item xs={2} sm={2} md={2}></Grid>
      </Grid>
      <Grid container spacing={0} sx={{ marginBottom: 5 }}>
        <Grid item xs={2} sm={2} md={2}></Grid>
        <Grid item xs={8} sm={8} md={8} sx={{ marginTop: 10 }}>
          <Box sx={{ textAlign: "center" }}>
            <Typography sx={{ fontSize: "50px", marginBottom: 5 }}>
              Start exploring.
            </Typography>
            <ButtonHome />
          </Box>
          <Box sx={{ marginTop: 15 }}>
            <Typography
              sx={{
                fontSize: "50px",
                marginBottom: 5,
                textAlign: "center",
                color: "white",
              }}
            >
              Featured In:
            </Typography>
            <Grid container spacing={2}>
              {imageUrls.map((url, index) => (
                <Grid
                  key={index}
                  item
                  xs={12}
                  sm={12}
                  md={12}
                  lg={4}
                  xl={4}
                  xxl={4}
                  sx={{ textAlign: "center" }}
                >
                  <CardMedia
                    component="img"
                    src={url}
                    alt={`Image ${index + 1}`}
                    sx={{
                      display: "flex",
                      height: 50,
                      width: "auto",
                      margin: "0 auto",
                    }}
                  />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={2} sm={2} md={2}></Grid>
      </Grid>
      <Grid
        container
        spacing={0}
        sx={{ backgroundColor: "rgba(61, 70, 73, 1)" }}
      >
        <Grid item xs={1} sm={1} md={1} lg={1} xl={1} xxl={1}></Grid>
        <Grid item xs={10} sm={10} md={10} lg={10} xl={10} xxl={10}>
          <Box
            sx={{
              color: "white",
              py: 3, // Padding theo truc Y
            }}
          >
            <Grid container justifyContent="space-between" alignItems="center">
              <Grid item xs={9} md={9}>
                <Typography>
                  All memberships will be billed automatically on a recurring
                  basis until cancelled. If eligible for a free trial, cancel
                  before the trial ends to avoid being charged. Offer only valid
                  for new paid subscribers. See full terms of service{" "}
                  <Typography
                    component={Link}
                    to="/"
                    underline="hover"
                    sx={{ color: "rgb(0, 255, 132)" }}
                  >
                    here
                  </Typography>
                  .
                </Typography>
              </Grid>
              <Grid item xs={3} md={3} textAlign="right">
                <Typography>© Vanhvanh, Inc. 2024</Typography>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={1} sm={1} md={1} lg={1} xl={1} xxl={1}></Grid>
      </Grid>
    </Box>
  );
}
