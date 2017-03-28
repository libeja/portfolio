import React, { Component } from 'react';
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
  }

  componentDidMount() {
    let clouds = makeClouds(this.header);


    // window.onblur = () => {
    //   if (this.state.windowIsFocused) {
    //     clouds.stopClouds();
    //     this.setState({ windowIsFocused: false })
    //   }
    // }

    // window.onfocus = () => {
    //   if (!this.state.windowIsFocused) {
    //     clouds.startClouds();
    //     this.setState({ windowIsFocused: true })
    //   }
    // }
    clouds.startClouds();
  }

  render() {
    return (
      <section 
        ref={headerRef => {this.header = headerRef}}
        className='header'>
        <div className="name-container animate">
          <h1>jayUllman</h1>
          <h2 className='sub-title'>front-end engineer</h2>
        </div>
      </section>
    );
  }
}

export default Header;