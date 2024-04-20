import React, { useRef, useLayoutEffect } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../common/Footer/Footer";
import Header from "../common/Header/Header";

function AppLayout() {
  const headerRef = useRef(null);
  const footerRef = useRef(null);

  useLayoutEffect(() => {
    const headerHeight = (headerRef && headerRef.current.offsetHeight) || 0;
    const footerHeight = (footerRef && footerRef.current.offsetHeight) || 0;
    // eslint-disable-next-line
    const containerMinHeight = `${window.innerHeight - headerHeight - footerHeight}px`;
    console.log(headerHeight, footerHeight);
    // eslint-disable-next-line
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
