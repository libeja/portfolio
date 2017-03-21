import React from 'react';
import '../styles/project.scss';


const Project = (props) => {


    console.log(typeof props.img);
  return (
    <div className='project-container'>
      <span className={props.name}>{props.name}</span>
      <div style={{ background: `url(${props.img})`}} className='project'>
      </div>
    </div>
  );
}

export default Project;