import React from "react";
import { Box, Typography } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import LogOut from "../auth/LogOut";
import { styled } from "@mui/material/styles";
import HomeIcon from "@mui/icons-material/Home";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";

const NavBar = () => {
  const location = useLocation();

  return (
    <NavContainer display="flex" flexDirection="column">
      <Box display="flex" flexDirection={"column"} flexGrow={1} sx={{ gap: "8px" }}>
        <NavLink to="/cities" active={location.pathname === "/cities"}>
          <HomeIcon />
          <Typography variant="button">Home</Typography>
        </NavLink>
        <NavLink to="/setting" active={location.pathname === "/setting"}>
          <SettingsOutlinedIcon />
          <Typography variant="button">Setting</Typography>{" "}
        </NavLink>
      </Box>
      <Box>
        <NavLink>
          <LoginOutlinedIcon />
          <LogOut />
        </NavLink>
      </Box>
    </NavContainer>
  );
};

const NavContainer = styled(Box)(
  ({ theme }) => `
    min-width: 200px;
    min-height: calc(100vh - 64px ); /* Subtract header margin height */
    border-radius: 15px;
    background-color: #ffffff;
    padding: ${theme.spacing(2)};
    margin-right:${theme.spacing(2)};
    border : 1px solid #d9d9d9;
    display: flex;
    flex-direction: column;
  `
);

const NavLink = styled(Link)(
  ({ theme, active }) => `
    display:flex;
    flex-direction: row;
    align-items: center;
    justify-content:space-between;
    padding: ${theme.spacing(1)} ${theme.spacing(4)} ${theme.spacing(
    1
  )} ${theme.spacing(4)};

    border-radius: 10px;
    height: 40px;
    color: ${active ? "#ffffff" : "#000000"};
    background-color: ${active ? "#070B47" : "white"};
    text-decoration: none;
    &:hover {
      background-color: ${active ? "#070B47" : "#070B4730"};
    }
  `
);

export default NavBar;
