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

// const appWidthContext = React.createContext(0);
// const WidthContext = React.createContext(0);

function App() {
  
  const WidthContext = useContext(0);

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

  console.log(`windowWidth = ${width}`);

  return (
    <div className="App">
      {/* <WidthContext.Provider value={{ width }}> */}
      <Router>
        <Navbar />
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
      {/* </WidthContext.Provider> */}
    </div>
  );
}

export default App;
