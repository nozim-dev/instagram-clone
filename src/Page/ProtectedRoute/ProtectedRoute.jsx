import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const auth = localStorage.getItem("isLogin") === "true" ? true : false;
  // null determine if authorized, from context or however you're doing it

  // If authorized, return an outlet that will render child elements
  // If not, return element that will navigate to login page
  return auth ? <Outlet /> : <Navigate to="/signIn" />;
};
export default PrivateRoute;
