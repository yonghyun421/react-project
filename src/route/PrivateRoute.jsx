import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Mypage from "../pages/Mypage/Mypage";

function PrivateRoute() {
  const isAuthenticated = useSelector(state => state.auth.authenticate);

  return isAuthenticated ? <Mypage /> : <Navigate to="/login" />;
}

export default PrivateRoute;
