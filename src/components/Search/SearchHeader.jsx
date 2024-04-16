import { Box, TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchHeader() {
  return (
    <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
      <TextField
        placeholder="Search..."
        variant="outlined"
        sx={{
          width: "100%",
          borderColor: "transparent", // Set the border color to transparent to hide the border
          borderBottomColor: "white", // Set the border color for the bottom border (if needed)
          borderBottomWidth: 1, // Set the width of the bottom border (if needed)
          marginLeft: "8px",
        }}
        InputProps={{
          sx: {
            color: "white",
            borderBottom: "none", // Remove bottom border from input text
          },
          endAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ color: "white", border: "none" }} />
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
}
