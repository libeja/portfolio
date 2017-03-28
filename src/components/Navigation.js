import React, { Component } from 'react';
import Headroom from 'react-headroom';
import '../styles/navigation.scss';

const navLinks = [
  <li key='projects'><a href='#projects'>Projects</a></li>,
  <li key='about'><a href='#about'>About</a></li>,
  <li key='contacts'><a href='#contact'>Contact</a></li>
]

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
        
          {navLinks}
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
          {navLinks}
        </div>
      </nav>
      </Headroom>
    );
  }
}

export default NavBar;
