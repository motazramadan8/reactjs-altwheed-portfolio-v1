import React from "react";
import "./header.css";
import { HashLink } from "react-router-hash-link";
import Logo from "../../images/Screenshot_2023-10-21_135235-removebg-preview.png";
import Brush from "../../images/14-white-grunge-brush-stroke-13.png";

function LeftHeader() {
  return (
    <div className="left-header">
      <HashLink smooth to="/#home">
        <img className="bg-img" src={Brush} width="165" alt="logo" />
        <img className="child" src={Logo} width="120" alt="logo" />
      </HashLink>
    </div>
  );
}

export default LeftHeader;
