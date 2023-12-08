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
          I am highly skilled in problem-solving and have a proven track record of delivering results. I am a persistent and dedicated individual.
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
