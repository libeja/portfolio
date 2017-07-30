import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { showcaseProjects, moreProjects } from '../projectList';

import '../styles/projectPage.scss';

const LinkToPortfolio = () =>
  <Link className="portfolio-link" to="/#projects">
    <i className="fa fa-angle-left" aria-hidden="true" />
    <i className="fa fa-angle-left" aria-hidden="true" /> Back to portfolio
  </Link>;

const ExternalLink = props =>
  <div className="external-link">
    <a href={props.url} target="_blank">
      {props.children} <i className="fa fa-angle-right" aria-hidden="true" />
      <i className="fa fa-angle-right" aria-hidden="true" />
    </a>
  </div>;

/**
 * Use scroll restoration to reset window to top
 * from react router docs: https://reacttraining.com/react-router/web/guides/scroll-restoration
 */
class ScrollToTopOnMount extends Component {
  componentDidMount(prevProps) {
    window.scrollTo(0, 0);
  }

  render() {
    return null;
  }
}

const ProjectPage = props => {
  const projectUrl = props.match.params.projectUrl;
  let project;

  // find project object from projectList
  project = showcaseProjects.find(project => {
    return projectUrl === project.projectUrl;
  });
  if (!project) {
    project = moreProjects.find(project => {
      return projectUrl === project.projectUrl;
    });
  }

  if (!project) {
    props.history.push('/');
    return null;
  }

  return (
    <div className="project-page">
      {/* scroll window to top */}
      <ScrollToTopOnMount />

      <LinkToPortfolio />
      <h1>
        {project.name}
      </h1>
      <h4>
        {project.description}
      </h4>
      <ExternalLink url={project.liveLink}>Check out the live site</ExternalLink>
      <img className="project-image-large" src={project.img} />

      <ExternalLink url={project.gitLink}>Check out the project source code</ExternalLink>
      {project.userStories &&
        project.userStories.length > 0 &&
        <div className="project-user-stories-section">
          <h3>User Stories</h3>
          <div className="user-stories-container">
            <ol className="user-stories">
              {project.userStories.map((item, index) =>
                <li key={item}>
                  {item}
                </li>
              )}
            </ol>
          </div>
        </div>}
      {project.longDescription &&
        project.longDescription.length > 0 &&
        <div className="project-description-section">
          <h3>Project Description</h3>
          {project.longDescription.map(p => <p dangerouslySetInnerHTML={{ __html: p }} key={p} />)}
        </div>}

      <LinkToPortfolio />
    </div>
  );
};

export default ProjectPage;
