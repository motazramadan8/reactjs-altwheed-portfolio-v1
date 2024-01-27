import React, { useEffect, useState } from "react";
import { CgMenuRightAlt } from "react-icons/cg";
import request from "../../API/request";

function RightHeader({ toggle, setToggle, colorChange }) {
  const [whatsapp, setWhatsapp] = useState([]);

  useEffect(() => {
    request.get("/api/v1/whatsapp").then((res) => {
      setWhatsapp(res.data[0]);
    });
  }, []);
  return (
    <div
      style={{ paddingRight: colorChange && "30px" }}
      className="right-header"
    >
      <button>
          <a
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none" }}
            href={`http://wa.me/${whatsapp?.number}`}
          >
            <p>Get Started</p>
            <p className="get-started">Get Started</p>
          </a>
      </button>
      <CgMenuRightAlt
        onClick={() => setToggle((prev) => !prev)}
        className="burger-icon"
      />
    </div>
  );
}

export default RightHeader;
