// import { selectIsLoggedIn } from "@/redux/auth/slice";
// import { useSelector } from "react-redux";
import React from "react";
import { Navigate, useLocation } from "react-router-dom";

export const PrivateRoute = ({ component: Component, redirectTo = "/" }) => {
  // const isLoggedIn = useSelector(selectIsLoggedIn);
  const isLoggedIn = true;
  const location = useLocation();

  return !isLoggedIn ? (
    <Navigate state={{ from: location }} to={redirectTo} />
  ) : (
    Component
  );
};
