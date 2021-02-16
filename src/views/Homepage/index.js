import React from 'react';
import Particles from 'react-tsparticles';

import './style.css';

const Homepage = () => {
  const particleOptions = {
    background: {
      color: {
        value: '#ffffff',
      },
    },
    fpsLimit: 60,
    interactivity: {
      detectsOn: 'canvas',
      events: {
        onClick: {
          enable: true,
          mode: 'push',
        },
        onHover: {
          enable: true,
          mode: 'repulse',
        },
        resize: true,
      },
      modes: {
        bubble: {
          distance: 400,
          duration: 2,
          opacity: 0.8,
          size: 40,
        },
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: '#A8E6CE00',
      },
      links: {
        color: '#000111',
        distance: 150,
        enable: true,
        opacity: 0.25,
        width: 1,
      },
      collisions: {
        enable: true,
      },
      move: {
        direction: 'none',
        enable: true,
        outMode: 'bounce',
        random: false,
        speed: 2.5,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          value_area: 800,
        },
        value: 40,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: 'circle',
      },
      size: {
        random: true,
        value: 5,
      },
    },
    detectRetina: true,
  };

  return (
    <div id="homepage-container">
      <Particles id="tsparticles" options={particleOptions}></Particles>{' '}
      <h1 id="title-line" className="homepage-title">
        {' '}
        John B Sasser{' '}
      </h1>
      <h4 className="homepage-title">Software Developer</h4>
    </div>
  );
};

export default Homepage;
