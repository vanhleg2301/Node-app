/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Box, Button, Container, Grid, TextField, Input } from "@mui/material";

export default function Cv() {
  const [cvFile, setCvFile] = useState(null);

  const handleFileChange = (event) => {
    setCvFile(event.target.files[0]);
  };

  const handleSubmit = () => {
    // Handle form submission logic
    console.log("CV Submitted:", cvFile);
  };

  return (
    <>
      <Container maxWidth="md">
        <Grid container spacing={2} sx={{ marginTop: "50px" }}>
          <Grid item xs={12}>
            <Box textAlign="center" mb={2}>
              <h1>Create CV Here</h1>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Name"
              variant="outlined"
              margin="normal"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              margin="normal"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Phone Number"
              variant="outlined"
              margin="normal"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Address"
              variant="outlined"
              margin="normal"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Education"
              variant="outlined"
              multiline
              rows={4}
              margin="normal"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Experience"
              variant="outlined"
              multiline
              rows={4}
              margin="normal"
            />
          </Grid>
          <Grid item xs={12}>
            <Box textAlign="center" mt={2}>
              <h2>Submit CV Here</h2>
              <Input type="file" onChange={handleFileChange} />
            </Box>
          </Grid>
          <Grid item xs={12} sx={{ textAlign: "center" }}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleSubmit}
              sx={{ marginTop: "20px", backgroundColor: "gray" }}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
