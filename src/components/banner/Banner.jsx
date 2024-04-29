import { Col, Container, Image, Row } from "react-bootstrap";
import "./Banner.css";
import Register from "../register/Register";
import { useEffect, useState } from "react";
import LoadingPage from "../LoadingPage/LoadingPage";
import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function Banner() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      setIsLoggedIn(true);
    }
  }, [isLoggedIn]);

  return (
    <>
      <div className="banner">
        <div className="logo">
          <div className="img-logo">
            <Image
              style={{
                width: 40,
                height: 40,
              }}
              src="./img/meoden-removebg-preview.png"
              alt="img"
            />
          </div>
        </div>
        <Container className="banner-content">
          <Row>
            <Col md={6} sm={12}>
              <Row>
                <Col md={1}></Col>
                <Col md={10} sm={12}>
                  {isLoggedIn ? (
                    <div
                      className="form-registered"
                      style={{ textAlign: "center" }}
                    >
                      <h1 className="rainbow-text">Welcome to my Website</h1>
                      <LoadingPage />
                      <Button variant="light">
                        <Typography
                          className="rainbow-text"
                          component={Link}
                          to="/note"
                        >
                          Go to note something
                        </Typography>
                      </Button>
                    </div>
                  ) : (
                    <Register />
                  )}

                  <div></div>
                </Col>
                <Col md={1}></Col>
              </Row>
            </Col>

            <Col md={6}>
              <div className="banner-content-text">
                <div>
                  <h1 className="rainbow-text">
                    Everything you need to go from passion to paycheck
                  </h1>
                </div>

                <div className="title-img mt-4">
                  <Image
                    src="./img/output-onlinepngtools.png"
                    alt="img"
                    style={{ width: "100%", height: "auto" }}
                    fluid
                  />
                </div>
                <div
                  style={{
                    marginTop: "20px",
                    fontFamily:
                      "'KumlienPro-Bold', 'KumlienPro-Bold IE', Georgia, serif",
                  }}
                >
                  <h4>Vanh Vanh</h4>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
