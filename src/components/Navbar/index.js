import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

const Navbar = props => {
  return (
    <div id="navbar">
      {' '}
      <div></div>
      <div className="links-1">
        <Link id="about-me-link" to="/about-me">
          About Me
        </Link>

        <p>||</p>

        <Link id="portfolio-link" to="/portfolio">
          Portfolio
        </Link>

        <Link id="homepage-link" to="/reactPortfolio" style={{ padding: '0 2em' }}>
          Home
        </Link>

        <Link id="contact-me-link" to="/contact-me">
          Contact Me
        </Link>

        <p>||</p>

        <Link id="resume-link" to="/resume">
          Resume´
        </Link>
      </div>
      <div className="links-2"></div>
    </div>
  );
};

export default Navbar;
