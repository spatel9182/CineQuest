import React from "react";

import SettingTwo from "./SettingTwo/SettingTwo";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <SettingTwo />
      <div>
        <input className="searchInput" type="text" placeholder="Search" />
      </div>
      <div className="profileIndicator">
        <img className="ellipse" alt="Ellipse" src="./images/ellipse-1.png" />
        <div className="text-wrapper">Sara John</div>
      </div>
    </div>
  );
};

export default NavBar;
