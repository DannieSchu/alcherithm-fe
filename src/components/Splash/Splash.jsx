import React from 'react';
import { loading } from '../../hooks/AuthProvider';

const Splash = () => {
  if(loading) return (
    <section>
      <h2>loading...</h2>
    </section>
  );

  return (
    <h2>Splash goes here</h2>
  );

};
export default Splash;
