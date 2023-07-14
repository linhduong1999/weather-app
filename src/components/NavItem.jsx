import React from "react";
import { Typography } from "@mui/material";
import Link from "./Link";
import { styled } from "@mui/material/styles";

import { useLocation } from "react-router-dom";

const NavItems = React.memo(({ items }) => {
  const location = useLocation();

  const isActive = (to) => {
    return location.pathname.startsWith(to);
  };

  return items.map((item) => (
    <NavLink
      key={item.to}
      to={item.to}
      active={isActive(item.to) ? "true" : "false"}
    >
      {item.icon}
      <Typography variant="button">{item.label}</Typography>
    </NavLink>
  ));
});

export default NavItems;

export const NavLink = styled(Link)(
  ({ theme, active }) => `
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      padding: ${theme.spacing(1)} ${theme.spacing(4)};
      border-radius: ${theme.shape.borderRadius.s};
      height: 40px;
      color: ${
        active === "true"
          ? theme.palette.common.white
          : theme.palette.primary.main
      };
      background-color: ${
        active === "true" ? theme.palette.primary.main : "white"
      };
      &:hover {
        background-color: ${
          active === "true"
            ? theme.palette.primary.main
            : theme.palette.primary.light
        };
      }

      && > * {
        color: ${
          active === "true"
            ? theme.palette.common.white
            : theme.palette.primary.main
        };
      }
    `
);
