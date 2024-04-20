import React, { useRef, useLayoutEffect } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../common/Footer/Footer";
import Header from "../common/Header/Header";

function AppLayout() {
  const headerRef = useRef(null);
  const footerRef = useRef(null);

  useLayoutEffect(() => {
    const headerHeight = headerRef.current?.offsetHeight || 0;
    const footerHeight = footerRef.current?.offsetHeight || 0;
    const containerMinHeight = `${window.innerHeight - headerHeight - footerHeight}px`;
    console.log(headerHeight, footerHeight);
    document.querySelector(".contain").style.minHeight = containerMinHeight;
  }, []);

  return (
    <div className="wrap">
      <Header ref={headerRef} />
      <div className="contain">
        <Outlet />
      </div>
      <Footer ref={footerRef} />
    </div>
  );
}

export default AppLayout;
