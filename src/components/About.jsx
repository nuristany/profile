import React from "react";
import zhakya from "../images/Zhakya.png";
import { FaCircleCheck } from "react-icons/fa6";
const About = () => {
  return (
    <div className="about-container">
      <div className="about-container-title-texts">
        <p>Get to Know More</p>
        <h1>About Me</h1>
      </div>

      <div className="row">
        <div className="left">
          <div className="about-img-container">
            <img src={zhakya} alt="" />
          </div>
        </div>
        <div className="right">
          <div className="details">
            <div className="experience-education-container">
              <div className="experience">
                <h3>Experience</h3>
                <p>2+ Years</p>
                <p>Frontend Developer</p>
              </div>
              <div className="education">
                <h3>Education</h3>
                <p>B.Sc. Bachelor Degree</p>
                
              </div>
            </div>
            <div className="about-text-container">
              <p>
                What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
                printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a
                type specimen book. It has survived not only five centuries, but
                also the leap into electronic typesetting, remaining essentially
                unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more
                recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem Ipsum.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="experience-container">
        <div className="experience-title">
          <p>Explore My</p>
          <h1>Experience</h1>
        </div>

        <div className="experience-detail-container">
          <div className="frontend-experience">
            <h3>Frontend Development</h3>
            <div className="a">
              <div className="frontend-detail">
                <div>
                  <h3>
                    <FaCircleCheck />
                  </h3>
                </div>
                <div>
                  <h5>HTML</h5>
                  <p>Experienced</p>
                </div>
              </div>
              <div className="frontend-detail">
                <div>
                  <h3>
                    <FaCircleCheck />
                  </h3>
                </div>
                <div>
                  <h5>JAVASCRIPT</h5>
                  <p>Experienced</p>
                </div>
              </div>
              <div className="frontend-detail">
                <div>
                  <h3>
                    <FaCircleCheck />
                  </h3>
                </div>
                <div>
                  <h5>CSS</h5>
                  <p>Intermediate</p>
                </div>
              </div>
              <div className="frontend-detail">
                <div>
                  <h3>
                    <FaCircleCheck />
                  </h3>
                </div>
                <div>
                  <h5>REACT</h5>
                  <p>Experienced</p>
                </div>
              </div>
            </div>
          </div>
          <div className="frontend-experience">
            <h3>Backend Development</h3>
            <div className="a">
              <div className="frontend-detail">
                <div>
                  <h3>
                    <FaCircleCheck />
                  </h3>
                </div>
                <div>
                  <h5>Python</h5>
                  <p>Intermediate</p>
                </div>
              </div>
              <div className="frontend-detail">
                <div>
                  <h3>
                    <FaCircleCheck />
                  </h3>
                </div>
                <div>
                  <h5>Django</h5>
                  <p>Intermediate</p>
                </div>
              </div>
              <div className="frontend-detail">
                <div>
                  <h3>
                    <FaCircleCheck />
                  </h3>
                </div>
                <div>
                  <h5>JAVASCRIPT</h5>
                  <p>Intermediate</p>
                </div>
              </div>
              <div className="frontend-detail">
                <div>
                  <h3>
                    <FaCircleCheck />
                  </h3>
                </div>
                <div>
                  <h5>GIT</h5>
                  <p>Intermediate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
