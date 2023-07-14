import React from "react";

import { Outlet } from "react-router-dom";
import useStore from "./store/useStore";
import { Navigate, useNavigate } from "react-router-dom";
import NavBar from "./components/NavBar";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

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
          <Container>
            <Outlet />
          </Container>
        </Box>
      ) : (
        <Navigate to={"login"} />
      )}
    </>
  );
};

const Container = styled("div")(({ theme }) => ({
  marginLeft: `calc(200px + ${theme.spacing(4)})`,
  width: "100%",
  maxWidth: "1300px",
}));

export default App;
