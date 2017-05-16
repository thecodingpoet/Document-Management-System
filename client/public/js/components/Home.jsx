import React from 'react';
import About from './About.jsx';
import banner from '../../images/Banner3.jpg';


const Home = () => (
  <div>
    <img src={banner} alt=" landing page banner" id="banner" />
    <About />
  </div>
);
export default Home;
