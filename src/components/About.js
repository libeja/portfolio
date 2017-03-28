import React from 'react';
import '../styles/about.scss';

import ScrollableAnchor from 'react-scrollable-anchor';

const About = () => {
  return (
    <section className='about'>
      <ScrollableAnchor id='about'>
        <h3>&#60; About Me /&#62;</h3>
      </ScrollableAnchor>
      <div className="blurb">
        <p>
          Hi, my name is Jay. I develop web applications. I
          am looking for my first job in web development. 

          This portfolio page is a single page application utilizing React, MongoDb, and Node.
          Click here for more information.
      
        </p>
        <p>
        Note: this portfolio itself is a full-fledged React application, bundled and optimized with Webpack&nbsp;2. Check out the source code here.
        </p>

        <p>I have used the following technlogies to implement the projects: HTML5, CSS3, Sass(SCSS), React.js, Redux, D3.js Webpack&nbsp;2, git,
          
          Please check out my projects below.</p>
      </div>    
      <div className="education-section">
      <h4>Education and Certificates:</h4>
      <div className="education-list-container">
      <ul className="education-list">
          <li>Front End Development Certificate, <span className="italic">freeCodeCamp</span> (<a href="https://www.freecodecamp.com/libeja/front-end-certification" target="_blank">view</a>)</li>
          <li>Data Visualization / React.js Certificate, <span className="italic">freeCodeCamp</span> (<a href="https://www.freecodecamp.com/libeja/data-visualization-certification" target="_blank">view</a>)</li>
          <li>CS50: Introduction to Computer Science Certificate of Completion, <span className="italic">Harvard edX</span></li>
          <li>Bachelor of Arts, <span className="italic">Brown University</span></li>
      </ul>
      </div>
      </div>
      <div className="skills-section">
        <h4>Skills:</h4>
        <div className="devicon-container">
          <i className="devicon-html5-plain-wordmark"></i>
          <i className="devicon-css3-plain-wordmark"></i>
          <i className="devicon-javascript-plain"></i>
          <i className="devicon-react-original-wordmark"></i>
        </div>
        <div className="other-skills-container">
          <div>
          <span className="other-skills"><span className="bold underline">Other Skills</span>: Redux, Webpack 2, Git</span>
          <span className="other-skills"><span className="bold underline">Learning</span>: Node.js, MongoDb, Express.js</span>
          </div>
        </div>
      </div>

    </section>
  );
}

export default About;