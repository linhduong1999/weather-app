import { Outlet } from "react-router-dom";
import useStore from "./store/useStore";
import { Navigate } from "react-router-dom";
import NavBar from "./components/NavBar";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const App = () => {
  const user = useStore((state) => state.user);

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
