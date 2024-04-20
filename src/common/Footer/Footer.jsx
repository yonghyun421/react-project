import React, { forwardRef } from "react";
import "./Footer.style.css";

const Footer = forwardRef((props, ref) => (
  <div ref={ref} className="footer">
    <ul className="foo--list">
      <li>Home</li>
      <li>News</li>
      <li>GitHub</li>
      <li>Our Team</li>
    </ul>
    <div className="foo--copy">Copyright ©2024</div>
  </div>
));

export default Footer;
