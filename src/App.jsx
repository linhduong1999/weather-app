import { Outlet } from "react-router-dom";
import useStore from "./store/useStore";
import { Navigate } from "react-router-dom";
import Logout from "./auth/LogOut";

const App = () => {
  const user = useStore((state) => state.user);

  return (
    <>
      {user ? (
        <>
          <Logout />
          <Outlet />
        </>
      ) : (
        <Navigate to={"login"} />
      )}
    </>
  );
};
export default App;
