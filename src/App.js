import { BrowserRouter as Router, Route } from 'react-router-dom';

import Homepage from './views/Homepage';
import Navbar from './components/Navbar';
// import Footer from './components/Footer';
import Portfolio from './views/Portfolio';
import ContactMe from './views/ContactMe';
import AboutMe from './views/AboutMe';
import Resume from './views/Resume';

import './App.css';

function App() {
  return (
    <div className="App">
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
          <Resume />
        </Route>
      </Router>
    </div>
  );
}

export default App;
