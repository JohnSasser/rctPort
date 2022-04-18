import React from 'react';
import './style.css';
import smallSVG from '../../assets/Wave-footer-7.svg';

const screenWidth = window.innerHeight;
// console.log(screenWidth);

const Footer = () => {
  const LrgSVG = process.env.PUBLIC_URL + '/images/japanese-waves.jpg';
  const footerSVG = screenWidth > 1000 ? LrgSVG : smallSVG;
  // console.log(`footer SVG chosen from screen width => ${footerSVG}`);
  return (
    <div
      key={`${footerSVG}`}
      className="footer-parent-div"
      style={{
        backgroundImage: `url(${footerSVG})`,
        width: '100%',
        webkitMaskImage:
          'linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0))',
      }}
    >
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
