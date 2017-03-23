import React from 'react';
import Project from './Project';
import '../styles/projects.scss';

// imports list of projects as array
import projectList from '../projectList'


const projectComponentList = projectList
  .map((project) => {
    return <Project 
      key={project.name} 
      name={project.name} 
      img={project.img} 
      techList={project.techList}
      gitLink={project.gitLink}
      liveLink={project.liveLink}
    />
  });

const Projects = () => {

  return (
    <section>
      <h3>&#60; Projects /&#62;</h3>
      <div className='initial-projects-container'>
      {projectComponentList}
      </div>
      
      <span className='more-projects'><i className="fa fa-angle-double-down" aria-hidden="true"></i> Click for more projects</span>
    </section>
  );
}

export default Projects;