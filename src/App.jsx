import React from "react";

import { Outlet } from "react-router-dom";
import useStore from "./store/useStore";
import { Navigate, useNavigate } from "react-router-dom";
import NavBar from "./components/NavBar";
import { Box } from "@mui/material";

const App = () => {
  const user = useStore((state) => state.user);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (user && window.location.pathname === "/") {
      navigate("/cities");
    }
  }, [user, navigate]);

  return (
    <>
      {user ? (
        <Box display="flex" flexDirection="row">
          <NavBar />
          <Outlet />
        </Box>
      ) : (
        <Navigate to={"login"} />
      )}
    </>
  );
};

export default App;
