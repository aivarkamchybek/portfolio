import React from "react";

import "../styles/Intro.css";
import Typist from "react-typist";
import "react-typist/dist/Typist.css";
import GaziModel from "./GaziModel";
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import FadeInSection from "./FadeInSection";
import FractalTree from "./FractalTree";

class Intro extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1",
      visible: true
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }
  render() {
    return (
      <div id="intro">
        <FractalTree></FractalTree>
        <Typist avgTypingDelay={120}>
          <span className="intro-title">
            {"howdy, "}
            <span className="intro-name">{"Aivar"}</span>
            {" here."}
          </span>
        </Typist>
        <FadeInSection>
          <div className="intro-desc">
          "Hi there!
          I'm Aivar, a Software Engineer with a strong focus on building scalable, high-quality solutions using technologies like .NET, microservices, and Azure cloud. I specialize in software architecture, design principles, and design patterns to create clean, maintainable code. When I’m not coding, you’ll find me playing soccer, traveling, or working on my tennis game. I believe in balancing technical skills with creativity. Let’s talk about how I can bring value to your team with my expertise!"
          </div>
          <a
            href="mailto:aivarkamchybekuulu@gmail.com"
            className="intro-contact"
          >
            <EmailRoundedIcon></EmailRoundedIcon>
            {"  " + "contact me"}
          </a>
        </FadeInSection>
      </div>
    );
  }
}

export default Intro;
