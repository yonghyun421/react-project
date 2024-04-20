import React from "react";
import { Navigate } from "react-router-dom";
import Mypage from "../pages/Mypage/Mypage";

function PrivateRoute() {
  // eslint-disable-next-line
  const isAuthenticated = localStorage.getItem("authenticate") === "true";

  return isAuthenticated ? <Mypage /> : <Navigate to="/login" />;
}

export default PrivateRoute;
