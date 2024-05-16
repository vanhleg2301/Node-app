/* eslint-disable no-unused-vars */
import { Box, Button, Grid } from "@mui/material";
import React from "react";
import "./Payment.css";
import { Link, Outlet } from "react-router-dom";
import Header from "../components/header/Header";

export default function Payment() {
  return (
    <>
      <Box className="payment-page">
        <Grid container>
          <Grid item md={4}>
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
                Pay with Paypal
              </Button>
            </Box>
          </Grid>
          <Grid item md={8} sx={{ textAlign: "center" }}>
            <Outlet />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
