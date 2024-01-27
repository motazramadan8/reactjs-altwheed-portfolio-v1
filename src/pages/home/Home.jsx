import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./home.css";
import svg1 from "../../images/waves/wave-1.svg";
import svg2 from "../../images/waves/wave-2.svg";
import svg3 from "../../images/waves/wave-3.svg";
import svg4 from "../../images/waves/wave-4.svg";
import heroImg from "../../images/vectors/Design tools-rafiki.png";
import { HashLink } from "react-router-hash-link";
import AboutImg from "../../images/vectors/Palette-amico.png";
import { Row, Col } from "react-bootstrap";
import { GiPaintRoller } from "react-icons/gi";
import { BiSolidPaint } from "react-icons/bi";
import IconArtistImg from "../../images/icons/Designer.png";
import IconTecgImg from "../../images/icons/tech.png";
import SoundInsulation from "../../images/sections-header/Sound insulation.png";
import ModernPaint from "../../images/sections-header/Modern paint decoration design.png";
import GypsumBoard from "../../images/sections-header/Gypsum board.png";
import InstallingWallpaper from "../../images/sections-header/Installing wallpaper.png";
import request from "../../API/request";

function Home(props) {
  const [services, setServices] = useState([]);
  const [soundInsulation, setSoundInsulation] = useState([]);
  const [modernPaint, setModernPaint] = useState([]);
  const [gypsumBoard, setGypsumBoard] = useState([]);
  const [installingWallpaper, setInstallingWallpaper] = useState([]);
  const [whatsapp, setWhatsapp] = useState([]);

  useEffect(() => {
    request.get("/api/v1/services").then((res) => {
      setServices(res.data);
    });
  }, []);

  useEffect(() => {
    request.get("/api/v1/products").then((res) => {
      let setSoundInsulationProducts = res.data?.filter(
        (product) => product.category === "installation of sound insulation"
      );
      setSoundInsulation(setSoundInsulationProducts);

      let modernPaint = res.data?.filter(
        (product) => product.category === "modern paint decoration design"
      );
      setModernPaint(modernPaint);

      let gypsumBoard = res.data?.filter(
        (product) => product.category === "gypsum board decoration"
      );
      setGypsumBoard(gypsumBoard);

      let installingWallpaper = res.data?.filter(
        (product) => product.category === "installation wallpaper"
      );
      setInstallingWallpaper(installingWallpaper);
    });
  }, []);

  useEffect(() => {
    request.get("/api/v1/whatsapp").then((res) => {
      setWhatsapp(res.data[0]);
    });
  }, []);

  return (
    <>
      <Header theme={props.theme} setTheme={props.setTheme} />
      <section className="landing-section" id="home">
        <div className="container">
          <div className="content">
            <div className="content-left">
              <div className="text">
                <h1>Best way to decorate your home.</h1>
                <p>
                  We guarantee you the efficiency of our work and our skill in
                  decorating your home.
                </p>
              </div>
              <button>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    style={{ textDecoration: "none" }}
                    href={`http://wa.me/${whatsapp?.number}`}
                  >
                    <p>Contact Us</p>
                    <p className="get-started">Contact Us</p>
                  </a>
              </button>
            </div>
            <div className="content-right">
              <div className="hero-img">
                <img src={heroImg} alt="hero-img" />
              </div>
            </div>
          </div>
        </div>
        <div className="waves">
          <img src={svg1} alt="wave" />
          <img src={svg2} alt="wave" />
          <img src={svg3} alt="wave" />
          <img src={svg4} alt="wave" />
          {props.theme === "light" ? (
            <svg
              id="Layer_1"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1920 250"
              {...props}
              style={{
                position: "absolute",
                bottom: "-2vw",
                left: "-1px",
                border: "none",
              }}
            >
              <defs>
                <style>{".cls-1{fill:#F6F4FE;"}</style>
              </defs>
              <path
                className="cls-1"
                d="M2394,169.93a1604.23,1604.23,0,0,1-229.8,20.83c-308.34,5.7-406.44-82.08-652-96.26-246.18-14.21-309.33,64.64-454.34,91.41-24.51,4.52-74.49,11.08-174,4.85C614.25,173.89,525,94.66,347,88.39c-81.72-2.88-200.13,9-346.57,81.54V250H2393.6Z"
              />
            </svg>
          ) : (
            <svg
              id="Layer_1"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1920 250"
              {...props}
              style={{
                position: "absolute",
                bottom: "-2vw",
                left: "-1px",
                border: "none",
              }}
            >
              <defs>
                <style>{".cls-1{fill:#0B051D;"}</style>
              </defs>
              <path
                className="cls-1"
                d="M2394,169.93a1604.23,1604.23,0,0,1-229.8,20.83c-308.34,5.7-406.44-82.08-652-96.26-246.18-14.21-309.33,64.64-454.34,91.41-24.51,4.52-74.49,11.08-174,4.85C614.25,173.89,525,94.66,347,88.39c-81.72-2.88-200.13,9-346.57,81.54V250H2393.6Z"
              />
            </svg>
          )}
        </div>
      </section>

      <section className="about" id="about">
        <div className="container">
          <div className="section-header">
            <HashLink smooth to="/#about">
              Why Choose Us
              <p>Why Choose Us</p>
            </HashLink>
          </div>
        </div>
        <div className="container about-us">
          <Row>
            <Col lg="3" md="12" sm="12">
              <div className="about-card left">
                <GiPaintRoller className="card-icon" />
                <div className="text">
                  <h3>Lorem, ipsum.</h3>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Quaerat excepturi corporis
                  </p>
                </div>
              </div>
              <div className="about-card left">
                <BiSolidPaint className="card-icon" />
                <div className="text">
                  <h3>Lorem, ipsum.</h3>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Quaerat excepturi corporis
                  </p>
                </div>
              </div>
            </Col>
            <Col lg="6" className="about-image">
              <img className="about-img" src={AboutImg} alt="about" />
            </Col>
            <Col lg="3" md="12" sm="12">
              <div className="about-card right">
                <img src={IconArtistImg} className="card-img" alt="" />
                <div className="text">
                  <h3>Lorem, ipsum.</h3>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Quaerat excepturi corporis
                  </p>
                </div>
              </div>
              <div className="about-card right">
                <img src={IconTecgImg} className="card-img" alt="" />
                <div className="text">
                  <h3>Lorem, ipsum.</h3>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Quaerat excepturi corporis
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>

      <section className="services" id="services">
        <div className="container">
          <div className="section-header">
            <HashLink smooth to="/#about">
              Our Services
              <p>Our Services</p>
            </HashLink>
          </div>
        </div>
        <div className="container">
          <Row>
            {services?.map((service, index) => (
              <Col key={index} lg={3} md={5} sm={12} className="service-card">
                <div className="text">
                  <h1>{service?.title}</h1>
                  <p>{service?.description}</p>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </section>

      <section className="portfolio" id="portfolio">
        <div className="container">
          <div className="section-header">
            <HashLink smooth to="/#portfolio">
              Our Work
              <p>Our Work</p>
            </HashLink>
          </div>
        </div>

        <div className="container">
          <div className="portfolio-header">
            <div className="portfolio-header-left">
              <img src={SoundInsulation} width="500" alt="Sound Insulation" />
            </div>
            <div className="portfolio-header-right">
              <div className="line"></div>
            </div>
          </div>
        </div>
        <div className="container portfolio-items">
          <Row className="text-center">
            {soundInsulation.map((item) => (
              <Col
                key={item?._id}
                lg={4}
                md={6}
                sm={12}
                className="portfolio-item"
                title={item.title}
              >
                <div className="overlay"></div>
                <img src={item?.image?.url} alt="portfolio img" />
              </Col>
            ))}
          </Row>
        </div>

        <div className="container">
          <div className="portfolio-header">
            <div className="portfolio-header-left">
              <img src={ModernPaint} width="500" alt="Sound Insulation" />
            </div>
            <div className="portfolio-header-right">
              <div className="line"></div>
            </div>
          </div>
        </div>
        <div className="container portfolio-items">
          <Row className="text-center">
            {modernPaint.map((item) => (
              <Col
                key={item?._id}
                lg={4}
                md={6}
                sm={12}
                className="portfolio-item"
                title={item.title}
              >
                <div className="overlay"></div>
                <img src={item?.image?.url} alt="portfolio img" />
              </Col>
            ))}
          </Row>
        </div>

        <div className="container">
          <div className="portfolio-header">
            <div className="portfolio-header-left">
              <img src={GypsumBoard} width="500" alt="Sound Insulation" />
            </div>
            <div className="portfolio-header-right">
              <div className="line"></div>
            </div>
          </div>
        </div>
        <div className="container portfolio-items">
          <Row className="text-center">
            {gypsumBoard.map((item) => (
              <Col
                key={item?._id}
                lg={4}
                md={6}
                sm={12}
                className="portfolio-item"
                title={item.title}
              >
                <div className="overlay"></div>
                <img src={item?.image?.url} alt="portfolio img" />
              </Col>
            ))}
          </Row>
        </div>

        <div className="container">
          <div className="portfolio-header">
            <div className="portfolio-header-left">
              <img
                src={InstallingWallpaper}
                width="500"
                alt="Sound Insulation"
              />
            </div>
            <div className="portfolio-header-right">
              <div className="line"></div>
            </div>
          </div>
        </div>
        <div className="container portfolio-items">
          <Row className="text-center">
            {installingWallpaper.map((item) => (
              <Col
                key={item._id}
                lg={4}
                md={6}
                sm={12}
                className="portfolio-item"
                title={item.title}
              >
                <div className="overlay"></div>
                <img src={item?.image?.url} alt="portfolio img" />
              </Col>
            ))}
          </Row>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Home;
