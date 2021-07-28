import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <a
        target="_blank"
        className="footer-link"
        href="https://github.com/dimaodin/TypeMachine"
        rel="noreferrer"
      >
        😍 It's Open Source! 😍
      </a>
      <a 
      target="_blank"
      href="https://dimaodin.com"
      el="noreferrer"
      className="copy-right" rel="noreferrer">Made by Dima Odintsov</a>
    </div>
  );
};

export default Footer;
