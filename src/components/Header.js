import React, { Component } from 'react';
import NavBar from './Nav-bar';
import '../styles/header.scss';

class Header extends Component {

  render() {
    return (
      <section className='header'>
        <h1>jayUllman</h1>
        <h2 className='indent'>front-end engineer</h2>
      </section>
    );
  }
}



export default Header;