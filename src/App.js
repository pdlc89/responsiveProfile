import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar.js';
import Home from './components/Home/Home.js';
import About from './components/About/About.js';
import Work from './components/Work/Work.js';
import Footer from './components/Footer/Footer.js';

class App extends Component {
  render() {

      return (
          <div>
          <Navbar/>
          <Home />
          <About />
          <Work />
          <Footer />
          </div>
      )
  }
}

export default App;
