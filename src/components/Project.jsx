import limo from "../images/Screenshot 2024-08-05 162053.png";
import rating from "../images/Screenshot 2024-08-05 170015.png";

const Project = () => {
  return (
    <div className="project-container">
      <div className="project-detail">
        <img src={limo} alt="" />
        <div className="project-title">
          <h1>Project One</h1>
        </div>
        <div className="project-button">
          <button>GitHub</button>
          <button>Live Demo</button>
        </div>
      </div>
      <div className="project-detail">
        <img src={rating} alt="" />
        <div className="project-title">
          <h1>Project Two</h1>
        </div>
        <div className="project-button">
          <button>GitHub</button>
          <button>Live Demo</button>
        </div>
      </div>
      <div className="project-detail">
        <img src={limo} alt="" />
        <div className="project-title">
          <h1>Project Three</h1>
        </div>
        <div className="project-button">
          <button>GitHub</button>
          <button>Live Demo</button>
        </div>
      </div>
    </div>
  );
};

export default Project;
