/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState, useContext } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import "./Login.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import { Navigate } from "react-router-dom";
import LoginWith from "../components/LoginWith/LoginWith";
import { IconButton, InputAdornment, Typography } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { ENDPOINT } from "../ultil/constants";
import { Request } from "../ultil/request";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, sethLogin } = useContext(AuthContext);

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleCloseTab = () => {
    window.close();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await Request({ email, password }, `auth/login`, {
        method: "POST",
      });

      if (data) {
        // Lưu vào local storage
        localStorage.setItem("user", data.user);
        localStorage.setItem("accessToken", data.accessToken);
        const user = data.user;
        console.log("[From login]", { user });

        sethLogin(true);
        window.alert("Login successfully");

        return <Navigate to="/note" />;
      } else {
        window.alert("Login Fail");
        setEmail("");
        setPassword("");
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  if (localStorage.getItem("accessToken")) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <Row>
        <Col xs={3}></Col>
        <Col xs={6} md={6} sm={12}>
          <Container className="form-register">
            <div style={{ textAlign: "center" }}>
              <h3>Welcome</h3>
            </div>
            <div style={{ textAlign: "center" }}>
              <h6>Sign in to my website</h6>
            </div>
            <div className="form-text">
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col md={12}>
                    <Form.Group
                      controlId="formBasicEmail"
                      className="form-text-item"
                    >
                      <Form.Control
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={12}>
                    <Form.Group
                      controlId="formBasicPassword"
                      className="form-text-item"
                    >
                      <Form.Control
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        // endAdornment={
                        //   <InputAdornment position="end">
                        //     <IconButton
                        //       aria-label="toggle password visibility"
                        //       onClick={handleClickShowPassword}
                        //       onMouseDown={handleMouseDownPassword}
                        //       edge="end"
                        //     >
                        //       {showPassword ? (
                        //         <VisibilityOff />
                        //       ) : (
                        //         <Visibility />
                        //       )}
                        //     </IconButton>
                        //   </InputAdornment>
                        // }
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <div>
                  <Button
                    variant="success"
                    type="submit"
                    className="text-center"
                    style={{
                      marginTop: "20px",
                      backgroundColor: "#00FF84",
                      color: "#002333",
                      width: "100%",
                    }}
                  >
                    Login
                  </Button>
                  <p style={{ marginTop: "10px", textAlign: "center" }}>
                    Already have an account?{" "}
                    <Typography
                      component={Link}
                      to="/register"
                      onClick={handleCloseTab}
                    >
                      Sign In
                    </Typography>
                    .
                  </p>
                </div>
              </Form>
            </div>

            <div className="text-center mt-4">
              <strong style={{ fontWeight: "bold" }}>
                ---------- OR ----------
              </strong>
            </div>

            <div className="form-continue">
              <LoginWith />
            </div>
            <div className="agreement-text">
              <p>
                By signing up you agree to Skillshare's Terms of Service and
                Privacy Policy. This page is protected by reCAPTCHA and is
                subject to Google's Terms of Service and Privacy Policy.
              </p>
            </div>
          </Container>
        </Col>
        <Col xs={3}></Col>
      </Row>
    </>
  );
}
