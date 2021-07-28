import React from "react";
import "./Nav.css";
import logo from "./../../assets/logo.png";

const Nav = () => {
  return (
    <div className="nav-container" >
      <a 
          target="_self"
          href="/"
          el="noreferrer" rel="noreferrer"
      >
        <img className="flash-logo" src={logo} alt="logo" />
        <p className="flash-logo-text"><span>Type</span>Machine<span>.</span></p>
      </a>
    </div>
  );
};

export default Nav;
