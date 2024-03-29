import React from 'react';
import Footer from '../../components/Footer';
import { frontEndSVGs, backEndSVGs, toolsSVGs } from '../../utils/vectorJSX.js';
import { aboutMeText1 } from '../AboutMe/content.js';
import './style.css';

// import { Container, Row, Col } from 'react-bootstrap';
// console.log(content.content1);

const AboutMe = () => {
  const headshot = process.env.PUBLIC_URL + '/images/bike-race-headshot.jpeg';
  const headshot_2 = process.env.PUBLIC_URL + '/images/john-headshots-7.jpg';
  const headshot_3 = process.env.PUBLIC_URL + '/images/headshot-min.jpg';

  // console.log('headshot:', headshot);

  // Vectors are stored in arrays of functions that return the SVG in the utils folder.
  // put them into arr's here and map over to dynamically generate SVG icons;
  const frontEndVectors = [];
  const backEndVectors = [];
  const toolsVectors = [];

  frontEndSVGs.map(vector => frontEndVectors.push(vector));

  backEndSVGs.map(vector => backEndVectors.push(vector));

  toolsSVGs.map(vector => toolsVectors.push(vector));

  return frontEndVectors && backEndSVGs ? (
    <>
      <div id="aboutMe-container">
        <div className="about-section-pic">
          <img id="headshot-image" src={`${headshot_2}`} alt="headshot" />
        </div>
        <div className="about-section-text">{aboutMeText1}</div>
      </div>
      <div id="technologies-icons-parent-div">
        {frontEndVectors.map(svgFunction => {
          // console.log(typeof svgFunction);
          return (
            <div key={`${svgFunction}`} className="svg-box">
              {svgFunction()}
            </div>
          );
        })}

        {backEndVectors.map((svgFunction, idx) => {
          // console.log(svgFunction, idx);
          return (
            <div key={`${svgFunction + idx}`} className="svg-box">
              {svgFunction()}
            </div>
          );
        })}

        {toolsVectors.map(svgFunction => {
          return (
            <div key={`${svgFunction}`} className="svg-box">
              {svgFunction()}
            </div>
          );
        })}
      </div>
    </>
  ) : null;
};

export default AboutMe;
