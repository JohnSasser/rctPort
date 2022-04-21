import React, { useState, useEffect } from 'react';
import {
  Link,
  useRouteMatch,
  useParams,
  Route,
  Switch,
} from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import backgroundsvg from '../../assets/chevron-line-pattern.svg';
import { appObjects } from '../../utils/appObjectsArray';
import SelectedProject from '../../components/selectedProject';

import './styleSheet.css';

const Portfolio = () => {
  let { path, url } = useRouteMatch();

  return (
    <div
      id="portfolio"
      style={
        {
          // backgroundImage: `url(${backgroundsvg})`,
        }
      }
    >
      <Switch>
        <Route exact path={url}>
          <div
            style={{
              width: '100vw',
              backgroundColor: '#6C6E70 ',
              padding: '2em',
            }}
          >
            <h1
              style={{
                fontSize: '5em',
                color: 'white',
                opacity: '.8',
                paddingTop: '.5em',
              }}
            >
              Applications & Sites
            </h1>
            <h4
              style={{
                fontSize: '2em',
                color: 'white',
                opacity: '.65',
                margin: '.5em',
                padding: '1.5em',
              }}
            >
              Check out the latest work in website design and development, web
              application development.
            </h4>
          </div>
          {appObjects.map((x, idx) => {
            return (
              <Card
                style={{
                  width: '40rem',
                  margin: '2em 3em',
                  marginBottom: '5em',
                  border: 'none',
                  zIndex: '1',
                }}
                className="project-image"
                key={idx + x.link}
              >
                <Card.Img variant="top" src={x.imagePath} />
                <Card.Body
                  style={{ backgroundColor: '#ffffff', padding: '2em' }}
                >
                  <Card.Title>{x.name}</Card.Title>
                  <Card.Text>{x.description}</Card.Text>
                  <br /> <br />
                  <Link
                    style={{
                      height: '100%',
                      width: '100%',
                      textDecoration: 'none',
                      color: 'white',
                    }}
                    to={`${url}/${x.routeTitle}`}
                    referrerPolicy="no-referrer"
                  >
                    <Button
                      variant="primary"
                      style={{
                        backgroundColor: `${x.backgroundColor}`,
                        border: 'none',
                        marginBottom: '2em',
                      }}
                    >
                      More Info{' '}
                    </Button>
                  </Link>
                </Card.Body>
              </Card>
            );
          })}
        </Route>
        <Route path={`${url}/:projectID`}>
          <SelectedProject />
        </Route>
      </Switch>
    </div>
  );
};
export default Portfolio;
