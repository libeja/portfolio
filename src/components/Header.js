import React, { Component } from 'react';

import ScrollableAnchor from 'react-scrollable-anchor';

import '../styles/header.scss';
import '../styles/clouds.scss';

// import cloud animations
import makeClouds from '../clouds';


class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      windowIsFocused: true
    };

    this.header;
    this.clouds;
    this.onWindowBlur = this.onWindowBlur.bind(this);
    this.onWindowFocus = this.onWindowFocus.bind(this);
  }

  onWindowFocus() {
    if (!this.state.windowIsFocused) {
      this.clouds.startClouds();
      this.setState({ windowIsFocused: true })
    }
    console.log('focus');
  }

  onWindowBlur() {
    if (this.state.windowIsFocused) {
      this.clouds.stopClouds();
      this.setState({ windowIsFocused: false })
    }
    console.log('blur');
  
  }

  componentDidMount() {
    this.clouds = makeClouds(this.header);

    window.addEventListener('blur', this.onWindowBlur);
    window.addEventListener('focus', this.onWindowFocus);

    this.clouds.startClouds();
  }

  componentWillUnmout() {
    window.removeEventListener('blur', this.onWindowBlur);
    window.removeEventListener('focus', this.onWindowFocus);
  }

  render() {
    return (
      <section 
        ref={headerRef => {this.header = headerRef}}
        className='header'>
        <ScrollableAnchor id='home'>
        <div className="name-container animate">
          <h1>jayUllman</h1>
          <h2 className='sub-title'>full stack developer</h2>
        </div>
        </ScrollableAnchor>
      </section>
    );
  }
}

export default Header;