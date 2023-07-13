import React from "react";
import { Typography } from "@mui/material";
import useStore from "../store/useStore";
import { styled } from "@mui/material/styles";

const Logout = () => {
  const logout = useStore((state) => state.logout);

  const handleLogout = () => {
    logout();
  };

  return (
    <StyledButton variant="button" onClick={handleLogout}>
      Logout
    </StyledButton>
  );
};

const StyledButton = styled(Typography)(
  () => `
    color: inherit;
    background-color: transparent;
    border: none;
    padding: 0;
    cursor: pointer;
    outline: inherit;
  `
);
export default Logout;
