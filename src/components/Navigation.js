import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Headroom from 'react-headroom';
import PropTypes from 'prop-types';
import '../styles/navigation.scss';

// use <a> tags for home page so that scroll to anchor works
const navLinks_homePage = [
  <li key='home'><a href='#home'>Home</a></li>,
  <li key='projects'><a href='#projects'>Projects</a></li>,
  <li key='about'><a href='#about'>About</a></li>,
  <li key='contacts'><a href='#contact'>Contact</a></li>
];

// use <Link> when on a project page to avoid reloading page
const navLinks_projectPage = [
  <li key='home'><Link to='/#home'>Home</Link></li>,  
  <li key='projects'><Link to='/#projects'>Projects</Link></li>,
  <li key='about'><Link to='/#about'>About</Link></li>,
  <li key='contacts'><Link to='/#contact'>Contact</Link></li>
];

class NavBar extends Component {
  constructor() {
    super();

    this.state = {
      sliderIsOpen: false
    };

    this.toggleSlide = this.toggleSlide.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.toggleSlideState = this.toggleSlideState.bind(this);
  }

  // toggles slide state true/false
  toggleSlideState() {
    if (this.state.sliderIsOpen) {
      this.setState({ sliderIsOpen: false });
    } else {
      this.setState({ sliderIsOpen: true });
    }  
  }

  // hide sidebar and menu icon when scrolling if sidebar is open
  // callback from onUnpin from headroom.js
  handleScroll() {
    if (this.sideBar.className.indexOf('hidden') < 0 ) {
      this.sideBar.classList.toggle('hidden');
      // this.hamburgerIcon.classList.toggle('slide');
      this.toggleSlideState();
    }
  }

  // handles clicking on the hamburger icon
  // toggles whether drop down menu is visible
  toggleSlide() {
    this.sideBar.classList.toggle('hidden');
    // commented out code handled with conditional rendering
    // this.hamburgerIcon.classList.toggle('slide');
    
    this.toggleSlideState();
  }

  render() {
    const currentPath = this.context.router.route.location.pathname;
    return (
      <Headroom 
        disableInlineStyles 
        onUnpin={this.handleScroll}
        downTolerance={10}
      >
      <nav>
       
        {/* Sidebar */}
        
        <div 
          ref={(sideBar) => { this.sideBar = sideBar }} 
          className='sideBar hidden'
          onClick={this.toggleSlide}
        >
        
          {currentPath === '/' ? navLinks_homePage : navLinks_projectPage}
        </div>
        
        {/* wide links */}
        <div className='wide-nav'>
          <i
            className={this.state.sliderIsOpen
                ? 'hamburger-icon fa fa-times fa-2x slide'
                : 'hamburger-icon fa fa-bars fa-2x' } 
            onClick={this.toggleSlide}
            ref={(hamburgerIcon) => {this.hamburgerIcon = hamburgerIcon}}            
          ></i>
          {currentPath === '/' ? navLinks_homePage : navLinks_projectPage}
        </div>
      </nav>
      </Headroom>
    );
  }
}

NavBar.contextTypes = {
  router: PropTypes.object
}

export default NavBar;
