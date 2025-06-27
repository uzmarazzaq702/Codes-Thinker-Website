import React from 'react';
import Buildind from '../components/About/Building';
import Path from '../components/About/Path';
import Contact from '../components/home/Contact';
import Cards2 from '../components/home/Cards2';
import Vision from '../components/About/Vision';

const About = () => {
  return (
    <div>
      <Buildind />
      <Path/>
      <Vision/>
      <Contact/>
      <Cards2/>
    </div>
  );
};

export default About;
