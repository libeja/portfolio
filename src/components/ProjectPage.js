import React from 'react';
import { showcaseProjects, moreProjects } from '../projectList';

const ProjectPage = (props) => {
  const projectUrl = props.match.params.projectUrl;
  let project;

  // find project object from projectList
  project = showcaseProjects.find((project) => {
    return projectUrl === project.projectUrl;
  });
  if (!project) {
    project = moreProjects.find((project) => {
      return projectUrl === projectUrl;
    });
  }

  console.log(project);

  return (
    <div>
      <h1>{project.name}</h1>
      <h2>{project.description}</h2>
      <img className='projectImage-large' src={project.img} />
    </div>
  );
}

export default ProjectPage;