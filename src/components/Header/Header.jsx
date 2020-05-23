import React from 'react';
import styles from './Header.css';
import logo from '../../assets/IconWhite.png';

const Header = () => {

  return (
    <>
      <header className={styles.Header}>
        {/* <h1>Alcherithm</h1> */}
        <img src={logo} />
        <nav></nav>
      </header>
    </>
  );
};

export default Header; 
