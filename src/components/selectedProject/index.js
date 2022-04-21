import React from 'react';
import {
  Link,
  useRouteMatch,
  useParams,
  Route,
  Switch,
} from 'react-router-dom';
import { appObjects } from '../../utils/appObjectsArray';
import Button from 'react-bootstrap/Button';

export const SelectedProject = () => {
  const { projectID } = useParams();
  console.log(appObjects[projectID]);
  console.log(projectID);

  // The <Route> that rendered this component has a
  // path of `/topics/:projectID`. The `:projectID` portion
  // of the URL indicates a placeholder that we can
  // get from `useParams()`.

  let project;

  appObjects.map(x => {
    if (projectID === x.routeTitle) {
      project = x;
    } else return null;
  });
  console.log(project);

  return (
    <>
      <div className="selected-project-card-container">
        <div className="selected-project-description-div">
          <span className="selected-project-description">
            {' '}
            {project.description}
          </span>
          <br /> <br />
          <span className="selected-project-role"> {project.role}</span>
          <br />
          <a
            className="selected-project-link"
            href={project.link}
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
          alt={project.name}
          src={process.env.PUBLIC_URL + `${project.imagePath}`}
          target="blank"
          noreferrer="true"
        />
      </div>
    </>
  );
};

export default SelectedProject;
