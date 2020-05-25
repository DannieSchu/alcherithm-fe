import React from 'react';
import styles from './Splash.css';
import logo from '../../assets/IconWhite.png';

const Splash = () => {
// pass in signup and login

  return (
    <>
      <section className={styles.Splash}>
        <img src={logo} />
        <h2>Alcherithm</h2>
        <nav></nav>
      </section>
    </>
  );
};

export default Splash; 
