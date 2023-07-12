import { Navigate } from "react-router-dom";
import useStore from "../store/useStore";

export const ProtectedRoute = ({ children }) => {
  const user = useStore(useStore);
  if (!user) {
    // user is not authenticated
    return <Navigate to="/" />;
  }
  return children;
};
