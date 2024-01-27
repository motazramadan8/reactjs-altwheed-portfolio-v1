import React, { useEffect, useState } from "react";
import { BsWhatsapp } from "react-icons/bs";
import "../icon.css";
import request from "../../../API/request";

function WhatsApp() {
  const [whatsapp, setWhatsapp] = useState([]);

  useEffect(() => {
    request.get("/api/v1/whatsapp").then((res) => {
      setWhatsapp(res.data[0]);
    });
  }, []);

  return (
    <div className="icon">
      <div className="whatsapp">
          <a
            target="_blank"
            rel="noreferrer"
            href={`http://wa.me/${whatsapp?.number}`}
          >
            <BsWhatsapp className="whatsapp-icon" />
          </a>
      </div>
    </div>
  );
}

export default WhatsApp;
