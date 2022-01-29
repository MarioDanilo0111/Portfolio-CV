import React from "react";
import "./footer.css";
import Git from "../img/github3.png";
import Linkedin from "../img/linkedin3.png";

const Footer = () => {
  const gitClick = () => {
    window.open("https://github.com/MarioDanilo0111");
  };
  const gitBand = () => {
    window.open("https://github.com/MarioDanilo0111/Band-Project");
  };
  const gitVinyl = () => {
    window.open("https://github.com/MarioDanilo0111/NiloVinyl");
  };
  const gitSuper = () => {
    window.open(
      "https://github.com/MarioDanilo0111/Super-Heros/blob/main/inl%C3%A4mningsuppLastAttempt.html"
    );
  };
  const linkedClick = () => {
    window.open("https://www.linkedin.com/in/mario-fernandez-a613b470/");
  };
  const kyhClick = () => {
    window.open("https://kyh.se/utbildningar/front-end-developer/");
  };
  const udemyClick = () => {
    window.open("https://www.udemy.com");
  };
  const ntiSkolaClick = () => {
    window.open("https://nti.se/");
  };
  const date = new Date();

  const currentYear = date.getFullYear();

  return (
    <div className="footer section__padding" id="footer">
      <div className="footer__heading">
        <h1 className="gradient__text">Resume</h1>
      </div>

      <div className="footer-links">
        <div className="footer-links_logo">
          <p>GitHub Project</p>
          <img className="footer-img" onClick={gitClick} src={Git} alt="logo" />
        </div>
        <div className="footer-links_div">
          <h4>Projects</h4>
          <p onClick={gitBand}>Band Projekt</p>
          <p onClick={gitVinyl}>Vinyl Page</p>
          <p onClick={gitSuper}>Super Work</p>
        </div>
        <div className="footer-links_logo">
          <p>linkedIn</p>
          <img
            className="footer-img"
            onClick={linkedClick}
            src={Linkedin}
            alt="logo"
          />
        </div>
        <div className="footer-links_div">
          <h4>Studing</h4>
          <p onClick={kyhClick}>kyh</p>
          <p onClick={udemyClick}>Udemy</p>
          <p onClick={ntiSkolaClick}>NTI-Skola</p>
        </div>
      </div>

      <div className="footer-copyright"></div>
      <p>© .All rights reserved. {currentYear}</p>
    </div>
  );
};
export default Footer;
