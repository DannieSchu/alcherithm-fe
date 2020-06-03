import React from 'react';
import styles from './Loading.css';
import hexagons from '../../assets/hexagons/hexagons.png';

const Loading = () => (
  <section className={styles.Loading}>
    <img src={hexagons} className={styles.hexagons}alt="loading spinner" />
  </section>
);

export default Loading;
