import type { JSX } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../app/store";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  console.log('Is Logged In:', isLoggedIn);  // Debugging check

  return isLoggedIn ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
