import React, {useContext} from "react";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import "./Greeting.scss";
import landingPerson from "../../assets/lottie/robortHi";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";

import {illustration, greeting} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Greeting() {
  const {isDark} = useContext(StyleContext);
  if (!greeting.displayGreeting) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1
                className={isDark ? "dark-mode greeting-text" : "greeting-text"}
              >
                {" "}
                {greeting.title}{" "}
                <span className="wave-emoji">👋</span>
              </h1>
              <p
                className={
                  isDark
                    ? "dark-mode greeting-text-p"
                    : "greeting-text-p subTitle"
                }
              >
                {greeting.subTitle}
              </p>
              <SocialMedia />
            </div>
          </div>
          <div className="greeting-image-div">
            <table className="resume-button-table">
              <tr>
              <td colSpan="100%">
                <video autoPlay loop muted className="rover-vid">
                  <source src={require("../../assets/images/rover3.webm")} type="video/webm" />
                </video>
              </td>
              </tr>
              <tr>
              <td width="50%">
              <Button
                text="Resume"
                useful={true}
                newTab={true}
                href="https://drive.google.com/file/d/115nNca-89V6cTslu52entyYnUjTHvjCF/view?usp=sharing"
              />
              </td>
              <td width="50%" align="right">
              <Button
                text="PhD Thesis"
                useful={true}
                newTab={true}
                href="http://hdl.handle.net/11343/337334"
              />
              </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </Fade>
  );
}
