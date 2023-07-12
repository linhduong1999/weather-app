import { Outlet } from "react-router-dom";
import useUserStore from "./store/useUserStore";
import { Navigate } from "react-router-dom";
import Logout from "./auth/LogOut"

const App = () => {
  const user = useUserStore((state) => state.user);

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
