import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/projects.scss';

const Project = props => {
  const techList = props.techList;
  const techString = techList.join(' / ');
  let className;

  if (props.type === 'showcase-project') {
    className = 'project-container';
  } else {
    className = 'more-project-container';
  }

  return (
    <div className={className}>
      <div className="project-name">
        {props.name}
      </div>
      <div className="project-image-container">
        <Link to={props.projectUrl}>
          <div className="project-page-overlay">
            <span className="overlay-text">
              Click here to see more about this project <i className="fa fa-chevron-right" aria-hidden="true" />
              <i className="fa fa-chevron-right" aria-hidden="true" />
            </span>
          </div>
          <div style={{ backgroundImage: `url(${props.img})` }} className="project" />
        </Link>
      </div>
      <div className="project-links">
        <a href={props.liveLink} target="_blank">
          Live Site
        </a>{' '}
        /
        <a href={props.gitLink} target="_blank">
          {' '}Source Code
        </a>{' '}
        <i className="fa fa-github" aria-hidden="true" />
      </div>
      <div className="techList">
        {techString}
      </div>
      <div className="project-description">
        {props.description}
      </div>
    </div>
  );
};

export default Project;
