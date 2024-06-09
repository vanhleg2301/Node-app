/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PlagiarismIcon from "@mui/icons-material/Plagiarism";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { AuthContext } from "../../context/AuthProvider";

const navs = [
  { label: "Profile", icon: <AccountCircleIcon /> },
  { label: "Cv", icon: <PlagiarismIcon /> },
  { label: "Company", icon: <LocationCityIcon /> },
  { label: "Interview Result", icon: <MarkEmailReadIcon /> },
  { label: "Practice", icon: <QuestionMarkIcon /> },
  { label: "More", icon: <MoreHorizIcon /> },
];

export default function NavMeeting() {
  const {
    user: { auth, uid },
  } = useContext(AuthContext);

  const navigate = useNavigate();
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    setUserId(uid);
  }, [uid]);

  const handleClickNav = (nav) => {
    navigate(nav);
  };

  const handleBlock = () => {
    return (
      <Button
        variant="text"
        sx={{ width: "100%", height: "15vh", color: "black" }}
      >
        Test interview
      </Button>
    );
  };

  const renderNavButton = (nav, index) => {
    if (
      nav.label === "Interview Result" &&
      userId !== "UT5inrpIuaPOv94Blum8z9fEjFI2"
    ) {
      return handleBlock();
    }
    return (
      <Button
        variant="text"
        sx={{
          width: "100%",
          height: "15vh",
          backgroundColor: "white",
          color: "black",
          ":hover": {
            backgroundColor: "gray",
            boxShadow: "10px 10px 20px rgba(0, 0, 0, 0.2)",
          },
        }}
        onClick={() => handleClickNav(nav.label.toLowerCase())}
        key={index}
        startIcon={nav.icon}
      >
        {nav.label}
      </Button>
    );
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderRadius: "10px" }}>
        {navs.map((nav, index) => renderNavButton(nav, index))}
      </Box>
    </Box>
  );
}
