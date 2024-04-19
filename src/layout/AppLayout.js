import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../common/Footer/Footer";
import Header from "../common/Header/Header";

function AppLayout() {
  return (
    <div className="wrap">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default AppLayout;
