import React from "react";
import Button from "@mui/material/Button";
import useUserStore from "../store/useUserStore";

const Logout = () => {
  const logout = useUserStore((state) => state.logout);

  const handleLogout = () => {
    logout();
  };

  return (
    <Button variant="contained" color="primary" onClick={handleLogout}>
      Logout
    </Button>
  );
};

export default Logout;
