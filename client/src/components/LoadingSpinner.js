import React from "react";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import styles from "../styles/styles";

const LoadingSpinner = () => {
  return (
    <Box sx={{ ...styles[115] }}>
      <CircularProgress size={80} />
    </Box>
  );
};

export default LoadingSpinner;
