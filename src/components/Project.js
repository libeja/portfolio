import React from 'react';
import '../styles/projects.scss';


const Project = (props) => {
  const techList = props.techList;
  const techString = techList.join(' / ');

  return (
    <div className='project-container'>
      <span className='project-name'>{props.name}</span>
      <a href={props.liveLink} target='_blank'>
        <div style={{ backgroundImage: `url(${props.img})`}} className='project' />
      </a>
      <div className='techList'>
        {techString}
      </div>
      <div className='project-links'>
        <a href={props.liveLink} target='_blank'>Live Site</a> / 
        <a href={props.gitLink} target='_blank'> Source Code</a>
      </div>
    </div>
  );
}

export default Project;