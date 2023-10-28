import React from "react";
import "./Highlights.scss";
import {Fade} from "react-reveal";

import makeCarousel from 'react-reveal/makeCarousel';
import Slide from 'react-reveal/Slide';
import styled, { css } from 'styled-components';

const width = '100%', height='540px';
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
  text-shadow: 3px 3px 3px rgba(255, 255, 255, 0.5);
  z-index: 100;
  line-height: ${height};
  text-align: center;
  color: rgba(0,0,0,0.5);
  position: absolute;
  top: 0;
  width: 50px;
  font-size: 3em;
  background: linear-gradient(to ${props => props.right ? 'left' : 'right'}, rgba(50,50,50,0.1), rgba(1,1,1,0));
  cursor: pointer;
  user-select: none;
  ${props => props.right ? css`right: 0%;` : css`left: 0%;`}
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
  width: 30px;
  margin-left: 40%;
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
        <Fade bottom duration={1000} distance="20px">
          <div className="highlights-card-container">
            <Carousel defaultWait={5000} maxTurns={1}>
            <Slide right>
              <div className="slide-div">
                <img className="img1" src={require("../../assets/images/walkplot.png")}/>
                <img className="img2" src={require("../../assets/images/strava.png")}/>
                <div className="desc-div">
                  <h1 className="slide-title">Map data</h1>
                  <p className="slide-subtitle"><i>Planning, processing, visualizing, running :)</i></p>
                  <p className="slide-body">Many of my projects and work roles have dealt with GPS telemetry data
                  <br/>
                  <br/>
                  And sometimes the GPS satellites themselves.
                  </p>
                </div>
              </div>
            </Slide>
            <Slide right>
              <div className="slide-div">
                <img className="img1" src={require("../../assets/images/world-vote.png")}/>
                <img className="img2" src={require("../../assets/images/astro.png")}/>
                <div className="desc-div">
                  <h1 className="slide-title">Full stack</h1>
                  <p className="slide-subtitle"><i>Serverless, containers, VPCs, CI/CD</i></p>
                  <p className="slide-body">I know all the acronyms! (And wrestled with them too)
                  <br/>
                  <br/>
                  A good idea is the easy part;
                  </p>
                  <div className="slide-body thatsTheJoke">have you ever tried to center a div?</div>
                </div>
              </div>
            </Slide>
            <Slide right>
              <div className="slide-div">
                <img className="img1" src={require("../../assets/images/wifi-mapper-map.jpg")}/>
                <img className="img2" src={require("../../assets/images/wifi-mapper-scanner.jpg")}/>
                <div className="desc-div">
                  <h1 className="slide-title">Computer vision</h1>
                  <p className="slide-subtitle"><i>The fun 20/20</i></p>
                  <p className="slide-body">From tracking digger arms to Wi-Fi signals, I've had hands-on experience helping computers navigate our 3D world</p>
                </div>
              </div>
            </Slide>
            <Slide right>
              <div className="slide-div">
                <div className="img1 graph">
                  <iframe width={"100%"} height={"100%"} src="https://www.desmos.com/calculator/2wyvfb2tym?embed" />
                </div>
                <div className="img2 graph">
                  <iframe width={"100%"} height={"100%"} src="https://www.desmos.com/calculator/vro1hsq1ou?embed" />
                </div>
                <div className="desc-div">
                  <h1 className="slide-title">Math</h1>
                  <p className="slide-subtitle"><i>I can do it!</i></p>
                  <p className="slide-body">
                    My work has required signal processing, linear algebra, stats, and my favourite, numerical optimisation.
                    <br/>
                    <br/>
                    But math doesn't have to be a chore... see <a href="http://desmos.com">desmos.com</a>
                  </p>
                </div>
              </div>
            </Slide>
            <Slide right>
              <div className="slide-div">
                <img className="img1" src={require("../../assets/images/litho.jpeg")}/>
                <img className="img2" src={require("../../assets/images/litho-src.jpg")}/>
                <div className="desc-div">
                  <h1 className="slide-title">Tinkering</h1>
                  <p className="slide-subtitle"><i>Little bit of form, whole lotta function</i></p>
                  <p className="slide-body">
                    FPGA games, 3D printing, Arduino TV remote controllers, Android apps, lithophanes (pictured)...
                    <br/>
                    <br/>
                    I strive to learn about every [a-z]{"{4}"}ware.
                    <br/>
                    <br/>
                    Most of my projects land on <a href="https://github.com/mkatzef">github</a> - check them out!
                  </p>
                </div>
              </div>
            </Slide>
          </Carousel>
        </div>
      </Fade>
    </div>)
}
