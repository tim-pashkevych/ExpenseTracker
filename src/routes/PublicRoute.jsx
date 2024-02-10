// import { selectIsLoggedIn } from "@/redux/auth/slice";
// import { useSelector } from "react-redux";

import { Navigate } from "react-router-dom";

export const PublicRoute = ({ redirectTo = "/", children }) => {
  // const isLoggedIn = useSelector(selectIsLoggedIn);
  const isLoggedIn = false;

  return isLoggedIn ? <Navigate to={redirectTo} /> : children;
};
