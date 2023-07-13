import React from "react";
import TempUnitToggle from "./TempUnitToggle";
import { Box } from "@mui/material";

const Setting = () => {
  return (
    <Box
      display="flex"
      flexDirection={"column"}
      flexGrow="1"
      maxWidth={"1300px"}
    >
      <TempUnitToggle />
    </Box>
  );
};

export default Setting;
