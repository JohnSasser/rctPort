import React, { useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadFull } from 'tsparticles';
import particlesOptions from './particleOptions.json';

import './style.css';

const Homepage = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    if (init) {
      return;
    }

    initParticlesEngine(async engine => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    <div id="homepage-container">
      {init && <Particles options={particlesOptions} />}
      <div className="homepage-title">
        <h1 id="title-line"> John Sasser </h1>
        <h4>
          Web & Mobile <br />
          Application Developer
        </h4>
      </div>
    </div>
  );
};

export default Homepage;
