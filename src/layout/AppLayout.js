import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../common/Footer/Footer";
import Header from "../common/Header/Header";
import Navbar from "../common/Navbar/Navbar";

function AppLayout() {
  return (
    <div className="wrap">
      <Header />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default AppLayout;
