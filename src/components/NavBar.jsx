import React, { useMemo } from "react";
import { Box, Typography, Stack } from "@mui/material";
import { useLocation } from "react-router-dom";
import { styled } from "@mui/material/styles";
import HomeIcon from "@mui/icons-material/Home";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import useStore from "../store/useStore";
import NavItems, { NavLink } from "./NavItem";

const items = [
  {
    to: "/cities",
    icon: <HomeIcon />,
    label: "Home",
  },
  {
    to: "/setting",
    icon: <SettingsOutlinedIcon />,
    label: "Setting",
  },
];

const NavBar = () => {
  const location = useLocation();
  const logout = useStore((state) => state.logout);

  const handleLogout = () => {
    logout();
  };

  const navItems = useMemo(() => {
    return <NavItems items={items} location={location} />;
  }, [items, location.pathname, logout]);

  return (
    <NavContainer display="flex" flexDirection="column">
      <Stack flexGrow={1} spacing={2}>
        {navItems}
      </Stack>
      <Box>
        <NavLink variant="button" onClick={handleLogout}>
          <LoginOutlinedIcon />
          <Typography variant="button">Log Out</Typography>
        </NavLink>
      </Box>
    </NavContainer>
  );
};

const NavContainer = styled(Box)(({ theme }) => ({
  position: "fixed",
  minWidth: "200px",
  minHeight: `calc(100vh - ${theme.spacing(2)})`,
  borderRadius: theme.shape.borderRadius.m,
  backgroundColor: theme.palette.common.white,
  padding: theme.spacing(2),
  border: `1px solid ${theme.palette.secondary.main}`,
  display: "flex",
  flexDirection: "column",
}));

export default React.memo(NavBar);
