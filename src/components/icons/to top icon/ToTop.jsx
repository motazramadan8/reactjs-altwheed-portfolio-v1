import React, { useState, useEffect } from "react";
import "../icon.css";
import { HashLink } from "react-router-hash-link";
import { AiOutlineArrowUp } from "react-icons/ai";

function ToTop() {
  const [showToTop, setShowToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      setShowToTop(scrollTop > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="icon">
      <div className="to-top-icon">
        {showToTop && (
          <HashLink smooth to="/#header">
            <AiOutlineArrowUp />
          </HashLink>
        )}
      </div>
    </div>
  );
}

export default ToTop;
