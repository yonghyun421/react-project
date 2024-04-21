import React, { forwardRef } from "react";
import "./Footer.style.css";

const Footer = forwardRef((props, ref) => (
  <div ref={ref} className="footer">
    <div className="foo-inner">
      <h2 className="foo-wordmark">NEWSTAP</h2>
      <ul className="foo--list">
        <li>김용현</li>
        <li>김주영</li>
        <li>김태영</li>
        <li>김효은</li>
        <li>최은영</li>
      </ul>
      <p>Team Project by ReactJS</p>
      <div className="foo--copy">Copyright © 2024</div>
    </div>
  </div>
));

export default Footer;
