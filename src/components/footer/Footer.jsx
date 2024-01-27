import React, { useEffect, useState } from "react";
import "./footer.css";
import { MDBFooter } from "mdb-react-ui-kit";
import Facebook from "../../images/contact/facebook.png";
import Gamil from "../../images/contact/gmail.png";
import Whatsapp from "../../images/contact/whatsapp.png";
import Linkedin from "../../images/contact/linkedin.png";
import request from "../../API/request";

function Footer() {
  const [facebook, setFacebook] = useState([]);
  const [whatsapp, setWhatsapp] = useState([]);
  const [gmail, setGmail] = useState([]);
  const [linkedin, setLinkedin] = useState([]);

  useEffect(() => {
    request.get("/api/v1/facebook").then((res) => {
      setFacebook(res.data[0]);
    });
  }, []);

  useEffect(() => {
    request.get("/api/v1/whatsapp").then((res) => {
      setWhatsapp(res.data[0]);
    });
  }, []);

  useEffect(() => {
    request.get("/api/v1/gmail").then((res) => {
      setGmail(res.data[0]);
    });
  }, []);

  useEffect(() => {
    request.get("/api/v1/linkedin").then((res) => {
      setLinkedin(res.data[0]);
    });
  }, []);

  return (
    <MDBFooter className="text-center text-lg-left footer" id="contact">
      <div className="social-media">
        <a target="_blank" rel="noreferrer" href={`${facebook?.link}`}>
          <img src={Facebook} alt="Facebook" className="social-media-item" />
        </a>
        <a
          href={`http://wa.me/${whatsapp?.number}`}
          rel="noreferrer"
          target="_blank"
        >
          <img src={Whatsapp} alt="WhatsApp" className="social-media-item" />
        </a>
        <a href={`mailto:${gmail?.email}`} rel="noreferrer" target="_blank">
          <img src={Gamil} alt="Gmail" className="social-media-item" />
        </a>
        <a href={`${linkedin?.link}`} target="_blank" rel="noreferrer">
          <img src={Linkedin} alt="LinkedIn" className="social-media-item" />
        </a>
      </div>
      <div className="text-center p-3 footer">
        © {new Date().getFullYear()} Copyright All Rights Reserved.{" "}
        <a target="_blank" rel="noreferrer" href="https://motaz.vercel.app">
          Motaz Ramadan.
        </a>
      </div>
    </MDBFooter>
  );
}

export default Footer;
