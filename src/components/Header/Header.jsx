import React from 'react';
import styles from './Header.css';
import logo from '../../assets/IconWhite.png';

const Header = () => {

  return (
    <>
      <header className={styles.Header}>
        <img src={logo} />
        <h2>Alcherithm</h2>
        <nav></nav>
      </header>
    </>
  );
};

export default Header; 
