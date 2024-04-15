/* eslint-disable no-unused-vars */
import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function ButtonHome() {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Button
        sx={{
          background: "rgba(0, 255, 132, 1)",
          color: "#002333",
          "&:hover": {
            background: "rgba(0, 255, 132, 0.8)",
          },
        }}
        variant="contained"
        component={Link}
        to="/payment"
      >
        Get your free month
      </Button>
    </Box>
  );
}
