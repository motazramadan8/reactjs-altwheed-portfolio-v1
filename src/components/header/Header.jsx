import React, { useState } from "react";
import LeftHeader from "./LeftHeader";
import NavBar from "./NavBar";
import RightHeader from "./RightHeader";
import { HashLink } from "react-router-hash-link";

function Header({ theme, setTheme }) {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="header" id="header" style={{ height: !toggle && "80px" }}>
      <nav className="container nav">
        <LeftHeader />
        <NavBar theme={theme} setTheme={setTheme} />
        <RightHeader setToggle={setToggle} toggle={toggle} />
      </nav>
      <aside
        style={{
          clipPath: toggle && "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        }}
      >
        <HashLink onClick={() => setToggle(false)} smooth to="/#home">
          Home
        </HashLink>
        <HashLink onClick={() => setToggle(false)} smooth to="/#about">
          About
        </HashLink>
        <HashLink onClick={() => setToggle(false)} smooth to="/#services">
          Services
        </HashLink>
        <HashLink onClick={() => setToggle(false)} smooth to="/#portfolio">
          Portfolio
        </HashLink>
        <HashLink onClick={() => setToggle(false)} smooth to="/#contact">
          Contact Us
        </HashLink>
      </aside>
    </div>
  );
}

export default Header;
