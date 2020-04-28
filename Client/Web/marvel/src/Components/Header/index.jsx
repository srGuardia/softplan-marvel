import React from "react";

import logo_marvel from "../../Assets/Logo/logo_marvel.png";

import "./header.css";

const HeaderGlobal = () => (
  <div className="header-container">
    <div className="header-content">
      <img src={logo_marvel} alt="Marvel" />
    </div>
  </div>
);

export default HeaderGlobal;
