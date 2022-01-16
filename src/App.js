import { BrowserRouter as Router, Route } from 'react-router-dom';

import Homepage from './views/Homepage';
import Navbar from './components/Navbar';
// import Footer from './components/Footer';
import Portfolio from './views/Portfolio';
import ContactMe from './views/ContactMe';
import AboutMe from './views/AboutMe';
import Resume from './views/Resume';

import './App.css';
import { useEffect, useState, useContext } from 'react';

function App() {
  const [width, setWindowWidth] = useState(0);
  const updateDimensions = () => {
    const width = window.innerWidth;
    setWindowWidth(width);
  };
  useEffect(() => {
    updateDimensions();

    window.addEventListener('resize', updateDimensions);

    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  return (
    <div className="App">
      <Router>
        <Navbar windowWidth={width} />
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/reactPortfolio">
          <Homepage />
        </Route>
        <Route path="/about-me">
          <AboutMe />
        </Route>
        <Route path="/portfolio">
          <Portfolio />
        </Route>
        <Route path="/contact-me">
          <ContactMe />
        </Route>
        <Route path="/resume">
          <Resume windowWidth={width} />
        </Route>
      </Router>
    </div>
  );
}

export default App;
