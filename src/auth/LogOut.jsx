import React from "react";
import Button from "@mui/material/Button";
import useStore from "../store/useStore";

const Logout = () => {
  const logout = useStore((state) => state.logout);

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
