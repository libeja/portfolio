import React from 'react';
import '../styles/about.scss';

import ScrollableAnchor from 'react-scrollable-anchor';

const About = () => {
  return (
    <section className='about'>
      <ScrollableAnchor id='about'>
        <h3>&#60; About Me /&#62;</h3>
      </ScrollableAnchor>

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

      <div>
      <h4>Education and Certificates</h4>
      Front End Development 
        freeCodeCamp Certificate of Completion

      Data Visualization / React.js Certification
        freeCodeCamp Certificate of Complettion
      

      CS50 Introduction to Computer Science (Harvard edX)
        Certificate of Completion

      B.A. from Brown University
      </div>

    </section>
  );
}

export default About;