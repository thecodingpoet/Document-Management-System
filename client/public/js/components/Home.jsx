import React, { Component } from 'react';
import About from './About.jsx';

class Home extends Component {
  render() {
    return (
      <div>
        <img src={require('../../images/Banner3.jpg')} alt=" landing page banner" id="banner" />
        <About />
      </div>

    );
  }
}

export default Home;
