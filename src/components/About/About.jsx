import React from 'react';
import { loading } from '../../hooks/AuthProvider';

const About = () => {
  if(loading) return (
    <section>
      <h2>loading...</h2>
    </section>
  );

  return (
    <h2>about goes here</h2>
  );

};
export default About;
