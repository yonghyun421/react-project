import React from "react";
import "./Footer.style.css";

function Footer() {
  return (
    <div className="footer">
      <ul className="foo--list">
        <li>Home</li>
        <li>News</li>
        <li>GitHub</li>
        <li>Our Team</li>
      </ul>
      <div className="foo--copy">Copyright ©2024</div>
    </div>
  );
}
export default Footer;
