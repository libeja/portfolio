import React, { Component } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';

import '../styles/header.scss';
import '../styles/clouds.scss';

// import cloud animations
import makeClouds from '../clouds';

class Header extends Component {
  constructor(props) {
    super(props);
    this.header;
    this.clouds;
  }

  componentDidMount() {
    this.clouds = makeClouds(this.header);
    this.clouds.startClouds();
  }

  render() {
    return (
      <section
        ref={headerRef => {
          this.header = headerRef;
        }}
        className="header"
      >
        <ScrollableAnchor id="home">
          <div className="name-container animate">
            <h1>Jay Ullman</h1>
            <h2>JavaScript Engineer</h2>
          </div>
        </ScrollableAnchor>
      </section>
    );
  }
}

export default Header;
