import React from 'react';
import Project from './Project';
import '../styles/projects.scss';

const projectList = [
  {
    name: 'Tic Tac Toe',
    img: require('../assets/test.png')
  }
];

const projectComponentList = projectList
  .map((project) => {
    return <Project 
      key={project.name} 
      name={project.name} 
      img={project.img} 
    />
  });

const Projects = () => {

  return (
    <section>
      Projects
      {projectComponentList}
    </section>
  );
}

export default Projects;