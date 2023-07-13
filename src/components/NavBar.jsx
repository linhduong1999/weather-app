import React from "react";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import LogOut from "../auth/LogOut";
import { styled } from "@mui/material/styles";

const NavBar = () => {
  return (
    <>
      <NavContainer display="flex" flexDirection="column">
        <Link to="/cities">Home</Link>
        <Link to="/setting">Setting</Link>
        <LogOut />
      </NavContainer>
    </>
  );
};

const NavContainer = styled(Box)(
  ({ theme }) => `
    min-width: 200px;
    height: 100vh;
    border-radius: 15px;
    background-color: #ffffff;
    padding: ${theme.spacing(2)};
    margin-right:${theme.spacing(2)};
    border : 1px solid #d9d9d9;
`
);

export default NavBar;
