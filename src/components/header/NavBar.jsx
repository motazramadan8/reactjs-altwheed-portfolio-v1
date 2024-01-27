import React, { useEffect, useState } from "react";
import { HashLink } from "react-router-hash-link";
import sun from "../../images/icons/sun.png";
import moon from "../../images/icons/moon.png";
import Home from "../../pages/home/Home";

function NavBar({ theme, setTheme }) {

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      localStorage.setItem("theme", "light");
    }
  };

  useEffect(() => {
    document.body.className = theme;
    setTheme(theme);
  }, [theme]);

  return (
    <div className="navbar">
      <HashLink smooth to="/#home">
        Home
      </HashLink>
      <HashLink smooth to="/#about">
        About
      </HashLink>
      <HashLink smooth to="/#services">
        Services
      </HashLink>
      <HashLink smooth to="/#portfolio">
        Portfolio
      </HashLink>
      <HashLink smooth to="/#contact">
        Contact Us
      </HashLink>
      {theme === "light" ? (
        <img
          style={{ cursor: "pointer" }}
          src={moon}
          onClick={toggleTheme}
          width="30"
          alt=""
        />
      ) : (
        <img
          style={{ cursor: "pointer" }}
          src={sun}
          onClick={toggleTheme}
          width="30"
          alt=""
        />
      )}
    </div>
  );
}

export default NavBar;
