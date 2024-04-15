/* eslint-disable no-unused-vars */
import { Box, Button, Grid } from "@mui/material";
import React from "react";
import "./Payment.css";
import { Link } from "react-router-dom";
import Header from "../components/header/Header";

export default function Payment() {
  return (
    <>
      <Header />
      <Box className="payment-page">
        <Grid container>
          <Grid item xs={3} sm={12} md={3}></Grid>
          <Grid item xs={6} sm={12} md={6}>
            <Box>
              <Button
                variant="light"
                className="payment-button"
                component={Link}
                to="/payment/momo"
                sx={{
                  color: "white",
                  border: "1px solid #394649",
                  backgroundColor: "rgb(165, 0, 100)",

                  "&:hover": { color: "black" },
                }}
              >
                Pay with Momo
              </Button>

              <Button
                variant="light"
                className="payment-button"
                component={Link}
                to="/payment/vnpay"
                sx={{
                  color: "white",
                  border: "1px solid #394649",
                  backgroundColor: "blue",
                  marginTop: "30px",
                  "&:hover": { color: "black" },
                }}
              >
                Pay with vnPay
              </Button>
              <Button
                variant="light"
                className="payment-button"
                component={Link}
                to="/payment/paypal"
                sx={{
                  color: "white",
                  border: "1px solid #394649",
                  backgroundColor: "#0070ba",
                  marginTop: "30px",
                  "&:hover": { color: "black" },
                }}
              >
                Paypal
              </Button>
            </Box>
          </Grid>
          <Grid item xs={3} sm={12} md={3}></Grid>
        </Grid>
      </Box>
    </>
  );
}
