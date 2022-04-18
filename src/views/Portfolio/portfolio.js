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

import './style.css';

const Portfolio = () => {
  let { path, url } = useRouteMatch();
  //   const { projectID } = useParams();

  return (
    <div
      style={{
        width: '100vw',
        backgroundImage: `url(${backgroundsvg})`,
        display: 'flex',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        backgroundColor: '#babab9'
      }}
    >
      <Switch>
        <Route exact path={url}>
          {appObjects.map((x, idx) => {
            return (
              <Card
                style={{
                  width: '30rem',
                  margin: '2em 3em',
                  backgroundColor: '#eeeeed',
                  marginBottom: '5em',
                }}
                key={idx + x.link}
              >
                <Card.Img
                  style={{ padding: '2.5em', paddingBottom: '2em' }}
                  variant="top"
                  src={x.imagePath}
                />
                <Card.Body style={{ backgroundColor: '#ffffff' }}>
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
