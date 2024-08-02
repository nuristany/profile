import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faFacebook,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

import zhakya from "../images/Zhakya.png";
import resume from "../assets/zhakya.pdf";

const Home = () => {
  const handleDownload = () => {
    window.open(resume, "_blank");
  };
  return (
    <div className="profile-container">
      <div className="profile-picture">
        <img src={zhakya} alt="" />
      </div>
      <div className="profile-text">
        <p className="text-p1">Hello, I`m</p>
        <h1>Zhakya Nuristany</h1>
        <p className="text-p2">Frontend And Backend Developer</p>
        <div className="profile-btn">
          <button className="btn btn-color" onClick={handleDownload}>
            Download Resume
          </button>
        </div>
        <div className="icons">
          <a
            href="https://www.linkedin.com/in/qais-nuristany/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="https://wa.me/0093786034903"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
          <a
            href="https://www.facebook.com/nuristany"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
