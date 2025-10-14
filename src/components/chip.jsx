import { Box, Typography } from "@mui/material";

import React from "react";

const Chip = ({ index, name }) => {
  const colors = [
    "#1976d2",
    "#dc004e",
    "#ff9800",
    "#9c27b0",
    "#00acc1",
    "#c2185b",
  ];

  return (
    <Box
      sx={{
        borderRadius: "16px",
        padding: "4px 12px",
        display: "inline-block",
        margin: "1px",
        backgroundColor: `${colors[index % colors.length]}33`,
      }}
    >
      <Typography variant="body2">{name}</Typography>
    </Box>
  );
};

export default Chip;
