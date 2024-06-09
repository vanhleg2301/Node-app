/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import { useState, useEffect, useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import LanguageIcon from "@mui/icons-material/Language";
import "./Header.css";
import { AuthContext } from "../../context/AuthProvider";
import { LanguageProvider, useLanguage } from "../../context/LanguageProvider";
import { Link, useNavigate } from "react-router-dom";
import SearchHeader from "../Search/SearchHeader";

const pages = [
  "Blog",
  "Note",
  "meeting",
  "edit",
  //  "Ludo",
  //  "NetWatch",
  //  "Cooking",
];
const settings = ["Profile", "Dashboard", "Logout"];

export default function Header() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      setIsLoggedIn(true);
    }
  }, [isLoggedIn]); // Empty dependency array ensures this effect only runs once after the initial render

  const {
    user: { displayName, photoURL, auth },
  } = useContext(AuthContext);

  const { setUserLogin } = useContext(AuthContext);

  const handleClickPage = (page) => {
    if (page === "Blog") {
      navigate("/blog");
    }
    if (page === "Note") {
      navigate("/note");
    }
    if (page === "NetWatch") {
      navigate("/netwatch");
    }
    if (page === "Cooking") {
      navigate("/cooking");
    }
    if (page === "edit") {
      navigate("/edit");
    }
    if (page === "ludo") {
      navigate("/ludo");
    }
    if (page === "meeting") {
      navigate("/meeting");
    }
  };

  const handleClick = (setting) => {
    if (setting === "Logout") {
      const isConfirmed = window.confirm(
        "Are you sure you want to delete this folder?"
      );
      if (!isConfirmed) {
        handleCloseUserMenu();
      } else {
        auth.signOut();
      }
    } else if (setting === "Profile") {
      navigate("/profile");
    } else if (setting === "Dashboard") {
      alert("Dashboard");
    } else {
      handleCloseUserMenu();
    }
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLanguageChange = () => {
    const { changeLanguage, language } = useLanguage(); // Move this inside the component function
    const newLanguage = language === "en" ? "fr" : "en";
    changeLanguage(newLanguage);
    alert(`Language changed to ${newLanguage}`);
  };

  return (
    <LanguageProvider>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#002333",
          // backgroundColor: "transparent",
          boxShadow: "none",
          // background:"linear-gradient(180deg, rgb(141 66 66 / 80%) 0%, rgba(0, 0, 0, 0) 100%);",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* Left */}
            <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component={Link}
              to="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <CardMedia
                component="img"
                alt="img"
                title="Home"
                sx={{
                  width: 40,
                  height: 40,
                }}
                image="/img/meoden-removebg-preview.png"
              />
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page, index) => (
                  <MenuItem key={index} onClick={() => handleClickPage(page)}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component={Link}
              to="/"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={() => {
                    handleCloseNavMenu();
                    handleClickPage(page);
                  }}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              ))}
            </Box>

            {/* Search Form */}
            <SearchHeader />

            {/* Right */}
            <Box marginRight={"10px"} marginLeft={"30px"}>
              <Tooltip title="Change Language">
                <IconButton onClick={handleLanguageChange} sx={{ p: 0 }}>
                  <LanguageIcon />
                </IconButton>
              </Tooltip>
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title={displayName || setUserLogin.displayName}>
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar src={photoURL || setUserLogin.photoURL} />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting, index) => (
                  <MenuItem key={index} onClick={() => handleClick(setting)}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </LanguageProvider>
  );
}
