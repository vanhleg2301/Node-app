/* eslint-disable no-unused-vars */
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Divider,
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import Paginations from "./Paginations";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import { useParams } from "react-router-dom";

const companies = Array.from({ length: 20 }, (_, i) => ({
  id: `${i + 1}`,
  content: `company ${i + 1}`,
}));
const itemsPerPage = 6;

export default function Content() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    setCurrentPage(1); // Reset to first page on search
    if (value === "") {
      // If search term is empty, reset sort order
      setSortOrder("asc");
    }
  };

  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
  };

  const filteredCompanies = companies
    .filter((company) =>
      company.content.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) =>
      sortOrder === "asc"
        ? a.content.localeCompare(b.content)
        : b.content.localeCompare(a.content)
    );

  // Calculate the items to display based on the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredCompanies.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <>
      <Box display="flex" justifyContent="center" mt={2} mb={2}>
        <Box sx={{ width: "50%" }}>
          <TextField
            label="Search"
            variant="outlined"
            value={searchTerm}
            onChange={handleSearchChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Box>
        <Box>
          <FormControl variant="outlined">
            <InputLabel>Sort</InputLabel>
            <Select value={sortOrder} onChange={handleSortChange} label="Sort">
              <MenuItem value="asc">
                <KeyboardDoubleArrowUpIcon />
                Ascending
              </MenuItem>
              <MenuItem value="desc">
                <KeyboardDoubleArrowDownIcon />
                Descending
              </MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>
      <Divider
        sx={{ margin: "20px auto", width: "80%", backgroundColor: "black" }}
      />
      <Container maxWidth="md">
        <Grid container spacing={1} sx={{ marginTop: "50px" }}>
          {currentItems.map((company, index) => (
            <Grid item xs={4} sm={4} md={4} key={index}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    image="/img/images.png"
                    alt="Image"
                  />

                  <CardContent>
                    <Box textAlign="center">{company.content}</Box>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button
                    variant="contained"
                    sx={{ backgroundColor: "gray" }}
                    onClick={() => alert(`Company ID: ${company.id}`)}
                  >
                    View
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Paginations
          currentPage={currentPage}
          totalPages={Math.ceil(companies.length / itemsPerPage)}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </Container>
    </>
  );
}
