import React, { Component } from 'react';
import Header from './Header';
import Navigation from './Navigation';
import About from './About';
import Projects from './Projects';
import Footer from './Footer';

// configures react-scrollable-anchor
import { configureAnchors } from 'react-scrollable-anchor'
configureAnchors({ offset: -65 })

// import weather-icon fonts from:
// https://erikflowers.github.io/weather-icons/
import '../font/weather-icons.min.scss';

class App extends Component {
  
  render() {
    return (
      <div className='wrapper'>
        <Navigation />
        <Header />
        <Projects />
        <About />
        <Footer />
      </div>
    )
  }
}

export default App;