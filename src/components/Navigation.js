import React, { Component } from 'react';
import Headroom from 'react-headroom';
import '../styles/navigation.scss';

const navLinks = [
  <li key='about'>About</li>,
  <li key='projects'>Projects</li>,
  <li key='contacts'>Contacts</li>
]

class NavBar extends Component {
  constructor() {
    super();

    this.toggleSlide = this.toggleSlide.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  // hide sidebar and menu icon when scrolling if sidebar is open
  handleScroll() {
    if (this.sideBar.className.indexOf('hidden') < 0 ) {
      this.sideBar.classList.toggle('hidden');
      this.hamburgerIcon.classList.toggle('slide');
    }
  }

  // handles clicking on the hamburger icon
  // toggles whether drop down menu is visible
  toggleSlide() {
    console.log(this.sideBar);
    this.sideBar.classList.toggle('hidden');
    this.hamburgerIcon.classList.toggle('slide');
  }

  render() {
    return (
      <Headroom 
        disableInlineStyles 
        wrapperStyle={{border: '3px solid white'}}
        onUnpin={this.handleScroll}
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
            className='hamburger-icon fa fa-bars fa-2x'
            onClick={this.toggleSlide}
            ref={(hamburgerIcon) => {this.hamburgerIcon = hamburgerIcon}}            
          ></i>
          {navLinks}
        </div>

        {/*
        <nav className='main-nav'>
          <i class="fa fa-bars fa-2x"></i>
          <div className='wide-nav hidden'>
            <div className='wide-div'>
              <ul>
                {navLinks}
              </ul>
            </div>
          </div>
        
        </nav>
        */}
      </nav>
      </Headroom>
    );
  }
}

export default NavBar;
