import React from "react";
import "./Highlights.scss";
import {illustration, techStack} from "../../portfolio";
import {Fade} from "react-reveal";
import Build from "../../assets/lottie/build";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";

import makeCarousel from 'react-reveal/makeCarousel';
import Slide from 'react-reveal/Slide';
import styled, { css } from 'styled-components';

const width = '100%', height='480px';
const Container = styled.div`
  position: relative;
  overflow: hidden;
  width: ${width};
`;
const Children  = styled.div`
  width: ${width};
  position: relative;
  height: ${height};
`;
const Arrow = styled.div`
  text-shadow: 3px 3px 3px #fff;
  z-index: 100;
  line-height: ${height};
  text-align: center;
  position: absolute;
  top: 0;
  width: 7%;
  font-size: 3em;
  background: linear-gradient(to ${props => props.right ? 'left' : 'right'}, rgba(50,50,50,0.1), rgba(1,1,1,0));
  cursor: pointer;
  user-select: none;
  ${props => props.right ? css`left: 93%;` : css`left: 0%;`}
`;
const Dot = styled.span`
  font-size: 1.5em;
  cursor: pointer;
  text-shadow: 1px 1px 1px #fff;
  color: #FF9900;
  user-select: none;
`;
const Dots = styled.span`
  text-align: center;
  margin-left:45%;
  width:10%;
  z-index: 100;
`;
const CarouselUI = ({ position, total, handleClick, children }) => (
  <Container>
    <Children>
      {children}
      <Arrow onClick={handleClick} data-position={position - 1}>{'ᐊ'}</Arrow>
      <Arrow right onClick={handleClick} data-position={position + 1}>{'ᐅ'}</Arrow>
    </Children>
    <Dots>
      {Array(...Array(total)).map( (val, index) =>
        <Dot key={index} onClick={handleClick} data-position={index}>
          {index === position ? '● ' : '○ ' }
        </Dot>
      )}
    </Dots>
  </Container>
);
const Carousel = makeCarousel(CarouselUI);

export default function Highlights() {
  return (
    <div className="highlights-section" id="highlights">
        <h1 className="highlights-heading">Highlights</h1>
        <div className="highlights-card-container">
          <Carousel defaultWait={3000} maxTurns={1}>
          <Slide right>
            <div className="slide-div">
              <img height={"50%"} src={require("../../assets/images/walkplot.png")}/>
              <br/>
              <img height={"50%"} src={require("../../assets/images/strava.png")}/>
              <div className="desc-div">
                <h1>Map data</h1>
                <p>Planning, processing, visualizing, running :)</p>
              </div>
            </div>
          </Slide>
          <Slide right>
            <div className="slide-div">
              <img height={"50%"} src={require("../../assets/images/astro.png")}/>
              <br/>
              <img height={"50%"} src={require("../../assets/images/world-vote.png")}/>
              <div className="desc-div">
                <h1>Full stack</h1>
                <p>Serverless, containers, VPCs, CI/CD --- I know all the acronyms! (And wrestled with them too)</p>
              </div>
            </div>
          </Slide>
          <Slide right>
            <div className="slide-div">
              <img height={"50%"} src={require("../../assets/images/wifi-mapper-map.jpg")}/>
              <br/>
              <img height={"50%"} src={require("../../assets/images/wifi-mapper-scanner.jpg")}/>
              <div className="desc-div">
                <h1>Computer vision/pose estimation</h1>
                <p>From tracking digger arms to Wi-Fi signals, I've had hands-on experience helping computers navigate our 3D world</p>
              </div>
            </div>
          </Slide>
          <Slide right>
            <div className="slide-div">
              <iframe width={"50%"} height={"50%"} src="https://www.desmos.com/calculator/2wyvfb2tym?embed" />
              <br/>
              <iframe width={"50%"} height={"50%"} src="https://www.desmos.com/calculator/vro1hsq1ou?embed" />
              <div className="desc-div">
                <h1>Math</h1>
                <p>I can do it</p>
                <p>Advanced signal processing, linear algebra, stats, and my favourite, numerical optimisation</p>
                <p>Left: some graphs I made on <a href="http://desmos.com">desmos.com</a></p>
              </div>
            </div>
          </Slide>
          <Slide right>
            <div className="slide-div">
              <img height={"50%"} src={require("../../assets/images/litho-src.jpg")}/>
              <br/>
              <img height={"50%"} src={require("../../assets/images/litho.jpeg")}/>
              <div className="desc-div">
                <h1>Tinkering</h1>
                <p>For form and function</p>

                Candle holder lithophanes, Arduino TV remote, Android apps...
                <br/>
                Most of my projects land on github - check them out!
              </div>
            </div>
          </Slide>
        </Carousel>
      </div>
    </div>)
}
