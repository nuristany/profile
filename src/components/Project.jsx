import limo from "../images/Screenshot 2024-08-05 162053.png";
import rating from "../images/Screenshot 2024-08-05 170015.png";
import movileflix from "../images/Screenshot 2024-08-08 133605.png";
import ibuy from "../images/Screenshot 2024-08-12 105743.png";

const Project = () => {
  return (
    <div className="project-container">
      <div className="project-title-container">
        <p>Browse My Recent</p>
        <h1 style={{ color: "black", marginTop: "5px" }}>Projects</h1>
      </div>
      <div className="project-content-container">
        <div className="project-detail">
          <img src={movileflix} alt="" />
          <div className="project-title">
            <h1>Project One</h1>
          </div>
          <div className="project-button">
            <a
              style={{ textDecoration: "none" }}
              href="https://github.com/nuristany/movieflix/"
            >
              <button>GitHub</button>
            </a>
            <a
              style={{ textDecoration: "none" }}
              href="https://nuristany.github.io/movieflix/"
              rel="noreferrer"
            >
              <button>Live Demo</button>
            </a>
          </div>
        </div>
        <div className="project-detail">
          <img src={rating} alt="" />
          <div className="project-title">
            <h1>Project Two</h1>
          </div>
          <div className="project-button">
            <a
              style={{ textDecoration: "none" }}
              href="https://github.com/nuristany/productRating"
            >
              <button>GitHub</button>
            </a>
            <a
              style={{ textDecoration: "none" }}
              href="https://nuristany.github.io/productRating/"
            >
              <button>Live Demo</button>
            </a>
          </div>
        </div>
        <div className="project-detail">
          <img src={limo} alt="" />
          <div className="project-title">
            <h1>Project Three</h1>
          </div>
          <div className="project-button">
            <a
              style={{ textDecoration: "none" }}
              href="https://github.com/nuristany/limo-services"
              rel="noopener no referrer"
            >
              <button>GitHub</button>
            </a>

            <a
              style={{ textDecoration: "none" }}
              href="https://mylimoservices-production.up.railway.app/"
              rel="noopener no referrer"
            >
              <button>Live Demo</button>
            </a>
          </div>
        </div>

        <div className="project-detail">
          <img src={ibuy} alt="" />
          <div className="project-title">
            <h1>Project Four</h1>
          </div>
          <div className="project-button">
            <a
              style={{ textDecoration: "none" }}
              href="https://github.com/nuristany/usestorefront"
            >
              <button>GitHub</button>
            </a>
            <a
              style={{ textDecoration: "none" }}
              href="https://ibuy-front.netlify.app/"
              rel="noreferrer"
            >
              <button>Live Demo</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
