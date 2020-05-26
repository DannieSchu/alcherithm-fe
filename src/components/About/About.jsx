import React from 'react';
import { useLoading } from '../../hooks/AuthProvider';

const About = () => {
  const loading = useLoading();
  if(loading) return (
    <section>
      <h2>loading...</h2>
    </section>
  );

  return (
    <h2>About goes here</h2>
  );

};
export default About;
