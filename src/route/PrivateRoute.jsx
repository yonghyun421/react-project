import React from "react";
import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
import Mypage from "../pages/Mypage/Mypage";

function PrivateRoute({ isLogin }) {
  return isLogin ? <Mypage /> : <Navigate to="/login" />;
}

PrivateRoute.propTypes = {
  isLogin: PropTypes.bool,
};

PrivateRoute.defaultProps = {
  isLogin: false,
};

export default PrivateRoute;
