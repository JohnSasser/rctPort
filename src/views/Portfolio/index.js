import React, { useState } from 'react';
import {
  Link,
  useRouteMatch,
  useParams,
  Route,
  Switch,
} from 'react-router-dom';
import Footer from '../../components/Footer';
import { appObjects } from '../../utils/appObject';

import './style.css';
import { Button } from 'react-bootstrap';

const Portfolio = () => {
  let { path, url } = useRouteMatch();
  // console.log('path', path, ' || url', url);

  function ProjectCard() {
    const { projectID } = useParams();
    // console.log(appObjects[projectID].imagePath);

    // The <Route> that rendered this component has a
    // path of `/topics/:projectID`. The `:projectID` portion
    // of the URL indicates a placeholder that we can
    // get from `useParams()`.

    return (
      <>
        <div
          className="selected-project-card-container"
          style={{
            background: `linear-gradient(to bottom, ${appObjects[projectID].backgroundColor}, #ffffff)`,
          }}
        >
          <div className="selected-project-description-div">
            <span className="selected-project-description">
              {' '}
              {appObjects[projectID].description}
            </span>
            <br /> <br />
            <span className="selected-project-role">
              {' '}
              {appObjects[projectID].role}
            </span>
            <br />
            <a
              className="selected-project-link"
              href={appObjects[projectID].link}
              target="blank"
              noreferrer="true"
            >
              <Button className="selected-project-link-button">
                Visit Live App{' '}
              </Button>
            </a>
          </div>
          <img
            className="selected-project-image"
            alt={appObjects[projectID].name}
            src={process.env.PUBLIC_URL + `${appObjects[projectID].imagePath}`}
            target="blank"
            noreferrer="true"
          />
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Switch>
        <Route exact path={url}>
          <div id="portfolio-container">
            {Object.values(appObjects).map((x, idx) => {
              // let index = x[idx];
              return (
                <Link
                  to={`${url}/${x.routeTitle}`}
                  key={x.imagePath[idx]}
                  className={`project-card-container`}
                >
                  <img
                    key={x.imagePath[idx]}
                    className={`project-image`}
                    alt={x.name}
                    src={process.env.PUBLIC_URL + `${x.imagePath}`}
                    target="blank"
                    noreferrer="true"
                  />
                </Link>
              );
            })}
            <Footer />
          </div>
        </Route>

        <Route path={`${url}/:projectID`}>
          <ProjectCard />
        </Route>
      </Switch>
    </>
  );
};

export default Portfolio;
