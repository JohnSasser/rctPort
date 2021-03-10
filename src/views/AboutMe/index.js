import React from 'react';
import Footer from '../../components/Footer';
import { frontEndSVGs, backEndSVGs, toolsSVGs } from '../../utils/vectorJSX.js';

import { Container, Row, Col } from 'react-bootstrap';

import './style.css';

const AboutMe = () => {
  const headshot = process.env.PUBLIC_URL + '/images/headshot-brick-scarf.jpg';

  console.log('headshot:', headshot);

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
          <p className="text">
            Ich höre schon des Dorfs Getümmel, Hier ist des Volkes wahrer
            Himmel, Zufrieden jauchzet groß und klein, Hier bin ich nicht; doch
            viel ist mir bewusst. Ich höre schon des Dorfs Getümmel, Hier ist
            des Volkes wahrer Himmel, Zufrieden jauchzet groß und klein, Hier
            bin ich nicht; doch viel ist mir bewusst. Vernunft fängt wieder an
            zu sprechen Und Hoffnung wieder an zu blühn; Man sehnt sich nach des
            Lebens goldner Baum. Gewöhnlich glaubt der Mensch, wenn er gut
            gezogen, Wird selbst ein weiser Mann gewogen. Wenn sich der Mensch,
            wenn er gut gezogen, Wird selbst ein weiser Mann gewogen. Vernunft
            fängt wieder an zu sprechen Und Hoffnung wieder an zu sprechen Und
            Hoffnung wieder an zu sprechen Und Hoffnung wieder an zu blühn; Man
            sehnt sich nach des Lebens goldner Baum. Vernunft fängt wieder an zu
            sprechen Und Hoffnung wieder an zu sprechen Und Hoffnung wieder an
            zu blühn; Man sehnt sich nach des Lebens Quelle hin. Es irrt der
            Mensch, wenn er nur Worte hört, Es müsse sich dabei doch auch was
            denken lassen. Ich bin von je der Ordnung Freund gewesen. So
            schreitet in dem engen Bretterhaus (Theater, Bühne) Den ganzen Kreis
            der Schöpfung aus, Und wandelt mit bedächtger Schnelle Vom Himmel
            durch die Welt zur Hölle.
          </p>
        </div>
        <div id="technologies-icons-parent-div">
          {/* <div id="front-end-vectors"> */}
          {frontEndVectors.map(svgFunction => {
            console.log(svgFunction);
            return (
              <div key={`${svgFunction}`} className="svg-box">
                {svgFunction()}
              </div>
            );
          })}
          {/* </div> */}
          {/* <div id="back-end-vectors"> */}
          {backEndVectors.map(svgFunction => {
            console.log(typeof svgFunction);
            return (
              <div key={`${svgFunction}`} className="svg-box">
                {svgFunction()}
              </div>
            );
          })}
          {/* </div> */}
          {/* <div id="tools-vectors"> */}
          {toolsVectors.map(svgFunction => {
            return (
              <div key={`${svgFunction}`} className="svg-box">
                {svgFunction()}
              </div>
            );
          })}
          {/* </div> */}
        </div>
      </div>

      <Footer />
    </>
  ) : null;
};

export default AboutMe;
