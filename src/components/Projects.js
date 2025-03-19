import React from "react";
import "../styles/Projects.css";
import FolderOpenRoundedIcon from "@material-ui/icons/FolderOpenRounded";
import GitHubIcon from "@material-ui/icons/GitHub";
import OpenInBrowserIcon from "@material-ui/icons/OpenInBrowser";
import FadeInSection from "./FadeInSection";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Carousel from "react-bootstrap/Carousel";
import ExternalLinks from "./ExternalLinks";

class Projects extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1"
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }
  render() {

    const projects = {
"ECommerceSite": {
    "desc": "Explore the robust world of eCommerce with this comprehensive project built using the .NET Framework and Onion Architecture. This application provides a seamless shopping experience with a powerful comparison page, advanced filtering options, and a sophisticated search engine. The implementation of the Unit of Work pattern ensures efficient data management and integrity, making this a scalable and maintainable solution.",
    "techStack": "C#, .NET Framework, Onion Architecture, Entity Framework, Unit of Work, HTML/CSS, JavaScript",
    "link": "https://github.com/aivarkamchybek/E-Commerce-.Net-",
        // open: ""
      },
      "AI 3D T-Shirt Maker": {
        desc: "Welcome to the 3D T-Shirt Model Renderer project! This cutting-edge application combines the power of ThreeJS, React Three Fiber, TailwindCSS, and Framer Motion to create an immersive and visually stunning 3D experience",
        techStack: "JavaScript, Django, React Three Fiber, DALLE AI Integration, TailwindCSS, VSCode",
        link: "https://github.com/aivarkamchybek/Ai-Powered-3DReactMotionKit",
        // open: ""
      },
"Vendor SKU Management": {
  desc: "This project involved developing a comprehensive system for managing vendor SKUs and prices. I created a RESTful API using .NET 6 for backend logic and Angular for the frontend, ensuring a smooth user experience. The system features a price aggregation algorithm to highlight the most competitive SKU prices, enhancing pricing transparency and decision-making. Additionally, I developed a Python-based machine learning model that predicts inventory depletion by analyzing SKU stock levels, improving forecasting accuracy. Using tools like Pandas, NumPy, and predictive ML algorithms, the model estimates days left for products based on historical sales and stock data, providing actionable insights for inventory management.",
  techStack: "C#, .NET 6, Angular, Python, Machine Learning, Pandas, NumPy, RESTful API, Entity Framework, JavaScript, HTML/CSS",
  link: "https://github.com/aivarkamchybek/Vendor-Frontend",
},
"PayNow": {
  desc: "Welcome to the dynamic world of web development! In this portfolio project, I've embarked on an exciting journey to create a sophisticated banking application using the powerful Django framework.",
  techStack: "Python, Django, HTML/CSS, Bootstrap, VSCode",
  link: "https://github.com/aivarkamchybek/PayNow",
  // open: ""
},
    };

    return (
      <div id="projects">
        <div className="section-header ">
          <span className="section-title">/ projects</span>
        </div>
        {}
        <div className="project-container">
          <ul className="projects-grid">
            {Object.keys(projects).map((key, i) => (
              <FadeInSection delay={`${i + 1}00ms`}>
                <li className="projects-card">
                  <div className="card-header">
                    <div className="folder-icon">
                      <FolderOpenRoundedIcon
                        style={{ fontSize: 35 }}
                      ></FolderOpenRoundedIcon>
                    </div>
                    <ExternalLinks
                      githubLink={projects[key]["link"]}
                      openLink={projects[key]["open"]}
                    ></ExternalLinks>
                  </div>

                  <div className="card-title">{key}</div>
                  <div className="card-desc">{projects[key]["desc"]}</div>
                  <div className="card-tech">{projects[key]["techStack"]}</div>
                </li>
              </FadeInSection>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Projects;
