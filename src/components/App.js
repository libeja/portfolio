/**
 * TODOS:
 * - add next/previous arrows to individual project page
 * - replace detecttouch.js with modernizr-touchevents
 */


import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './Header';
import Navigation from './Navigation';
import About from './About';
import Projects from './Projects';
import Footer from './Footer';
import ProjectPage from './ProjectPage';

// configures react-scrollable-anchor
import { configureAnchors } from 'react-scrollable-anchor'
configureAnchors({ offset: -65 })

// import weather-icon fonts from:
// https://erikflowers.github.io/weather-icons/
import '../font/weather-icons.min.scss';

// import devicons
// http://konpa.github.io/devicon/
import '../font/devicon.scss';

class App extends Component {
  render() {
    const HomeComponents = () => (
      <div>
        <Header />
        <Projects />
        <About />
      </div>
    );

    return (
      <div className='wrapper'>
        <Navigation />
        <Switch>
          <Route path='/:projectUrl' component={ProjectPage} />
          <Route path='/' render={HomeComponents} />
        </Switch>
        <Footer />
      </div>
    )
  }
}

export default App;