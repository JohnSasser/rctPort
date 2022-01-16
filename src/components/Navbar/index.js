import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

import './style.css';

const Navbar = props => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const updateNavbar = () => {
    if (props.windowWidth === 'desktop') {
      setNavbarOpen(true);
    } else setNavbarOpen(false);
  };

  const handleHamburgerClick = () => {
    hamburgerOpen === true ? setHamburgerOpen(false) : setHamburgerOpen(true);
  };

  useEffect(() => {
    updateNavbar();
  }, [props.windowWidth]);

  console.log(`hamburgerOpen: ${hamburgerOpen} || navbarOpen : ${navbarOpen}`);

  return navbarOpen === true ? (
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

        <Link
          id="homepage-link"
          to="/reactPortfolio"
          style={{ padding: '0 2em' }}
        >
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
  ) : (
    <>
      {' '}
      <div className="hamburger-menu-container">
        <div id="hamburger-icon-button" onClick={handleHamburgerClick}>
          <FaBars />
        </div>
        {hamburgerOpen ? (
          <div id="dropdown-menu">
            <li>
              <Link
                onClick={handleHamburgerClick}
                id="about-me-link"
                to="/about-me"
              >
                About Me
              </Link>
            </li>
            <li>
              <Link
                onClick={handleHamburgerClick}
                id="portfolio-link"
                to="/portfolio"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                onClick={handleHamburgerClick}
                id="homepage-link"
                to="/reactPortfolio"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                onClick={handleHamburgerClick}
                id="contact-me-link"
                to="/contact-me"
              >
                Contact Me
              </Link>
            </li>
            <li>
              <Link
                onClick={handleHamburgerClick}
                id="resume-link"
                to="/resume"
              >
                Resume´
              </Link>
            </li>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Navbar;
