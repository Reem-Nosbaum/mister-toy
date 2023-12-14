import { useAuth } from "./useAuth";
import { Navigate } from "react-router-dom";

const Protected = ({ children }) => {
  const { user } = useAuth();
  if (!user) {
    return <Navigate to="/cart" />;
  }
  return children;
};

export default Protected;
