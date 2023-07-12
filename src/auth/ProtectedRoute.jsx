import { Navigate } from "react-router-dom";
import useUserStore from "../store/useUserStore";

export const ProtectedRoute = ({ children }) => {
  const user = useStore(useUserStore);
  if (!user) {
    // user is not authenticated
    return <Navigate to="/" />;
  }
  return children;
};
