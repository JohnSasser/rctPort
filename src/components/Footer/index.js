import React from 'react';

import './style.css';

const Footer = () => {
  return (
    <div className="footer-parent-div">
      <p className="name-date">
        <span>
          John Sasser <span>&#169;</span> 2020{' '}
        </span>
      </p>

      <p className="loading-io-attribution">
        <a
          href="https://loading.io/background/m-wave/"
          target="blank"
          norefferer="true"
        >
          {' '}
          m-wave{' '}
        </a>
      </p>
    </div>
  );
};

export default Footer;
