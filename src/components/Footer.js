import React from 'react';
import '../styles/footer.scss';

const Footer = () => {

  return (
    <section className='footer'>
      <h3>&#60; Find me /&#62;</h3>
      <div className="icons-container">
        <a href="https://github.com/libeja" target="_blank"><i className="fa fa-github-square fa-4x" aria-hidden="true"></i></a>
        <a href="https://www.freecodecamp.com/libeja" target="_blank"><i className="fa fa-free-code-camp fa-4x" aria-hidden="true"></i></a>
        <a href="#"><i className="fa fa-envelope-o fa-4x" aria-hidden="true"></i></a>
      </div>
      <br/>
      <small>Created by Jay</small>
      <br/>
      <small>Using handcrafted HTML, CSS, JavaScript and optimized with React and Webpack</small>
    </section>
  );
}

export default Footer;