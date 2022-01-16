import React from 'react';
import Footer from '../../components/Footer';
import { frontEndSVGs, backEndSVGs, toolsSVGs } from '../../utils/vectorJSX.js';

// import { Container, Row, Col } from 'react-bootstrap';

import './style.css';

const AboutMe = () => {
  const headshot = process.env.PUBLIC_URL + '/images/bike-race-headshot.jpeg';

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
          <img id="headshot-image" src={`${headshot}`} alt="headshot" />
        </div>
        <div className="about-section-text">
          <p>
            I am a highly motivated Software Developer with an unrivaled passion
            for creating stunning and technically elegant web based solutions.
            Front-end preference with back-end/full stack experience and the
            competency to work collaboratively on a vast array of projects. I am
            happiest working on a team to deliver solutions synergistically. Not
            only do I take great pride in my ability to see things from the end
            user's perspective; I'm also a driven learner with the ability to
            see the big picture, compartmentalize tasks, and methodically tackle
            the project at hand. When a tough opportunity arises, I am able to
            pivot and seek the resources needed to analyze, attain, and
            implement solutions. I am fixated on continuous learning,
            adaptation, and innovation. I manage all aspects of web development,
            from concept to design, development, launch, maintenance, and user
            support. I enjoy the client-facing role and working closely with
            team members to produce high-quality deliverables.
          </p>
        </div>
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

      <Footer />
    </>
  ) : null;
};

export default AboutMe;
