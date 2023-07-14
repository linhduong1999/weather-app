import React from "react";
import { Box, Typography } from "@mui/material";

const EmptyState = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      paddingBottom={10}
    >
      <img src="./emptyicon.png" />
      <Typography variant="h6" width={250} textAlign={"center"} gutterBottom>
        There is nothing here. Please add your city.
      </Typography>
    </Box>
  );
};

export default EmptyState;
