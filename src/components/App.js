import React, { Component } from 'react';
import Header from './Header';
import Navigation from './Navigation';
import About from './About';
import Projects from './Projects';
import Footer from './Footer';


class App extends Component {
  
  render() {
    return (
      <div className='wrapper'>
        <Navigation />
        <Header />
        <About />
        <Projects />
        <Footer />
      </div>
    )
  }
}

export default App;