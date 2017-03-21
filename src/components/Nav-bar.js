import React, { Component } from 'react';
import '../styles/nav-bar.scss';

const navLinks = [
  <li key='about'>About</li>,
  <li key='projects'>Projects</li>,
  <li key='contacts'>Contacts</li>
]

class NavBar extends Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  // handles clicking on the hamburger icon
  // toggles whether drop down menu is visible
  handleClick() {
    console.log(this.sideBar);
    this.sideBar.classList.toggle('hidden');
  }

  render() {
    return (
      <nav>
        {/* Sidebar */}
        <div 
          ref={(sideBar) => { this.sideBar = sideBar }} 
          className='sideBar hidden'
          onClick={this.handleClick}
        >
        <i 
          className='fa fa-bars fa-2x'
        ></i>
          {navLinks}
        </div>
        
        {/* wide links */}
        <div className='wide-nav'>
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
    );
  }
}

export default NavBar;
