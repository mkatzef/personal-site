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
  text-shadow: 1px 1px 1px #fff;
  z-index: 100;
  line-height: ${height};
  text-align: center;
  position: absolute;
  top: 0;
  width: 10%;
  font-size: 3em;
  cursor: pointer;
  user-select: none;
  ${props => props.right ? css`left: 90%;` : css`left: 0%;`}
`;
const Dot = styled.span`
  font-size: 1.5em;
  cursor: pointer;
  text-shadow: 1px 1px 1px #fff;
  user-select: none;
`;
const Dots = styled.span`
  text-align: center;
  width: ${width};
  z-index: 100;
`;
const CarouselUI = ({ position, total, handleClick, children }) => (
  <Container>
    <Children>
      {children}
      <Arrow onClick={handleClick} data-position={position - 1}>{'<'}</Arrow>
      <Arrow right onClick={handleClick} data-position={position + 1}>{'>'}</Arrow>
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
          <Carousel defaultWait={2000} >
          <Slide right>
            <div className="slide-div">
              <div className="image-div">
                <img className="image-img" src={require("../../assets/images/walkplot.png")}/>
              </div>
              <div className="desc-div">
                <h1>Slide 1</h1>
                <p>Slide Description</p>
              </div>
            </div>
          </Slide>
          <Slide right>
            <div>
              <h1>Slide 2</h1>
              <p>Slide Description</p>
            </div>
          </Slide>
        </Carousel>
      </div>
    </div>)
}
