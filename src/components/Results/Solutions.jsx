import React from 'react';
import PropTypes from 'prop-types';
import styles from './Solutions.css';

const Solutions = ({ userSolution, anotherSolution  }) => (
  
  <section className={styles.Solutions} >
    <p>{userSolution}</p>
    <p>{anotherSolution}</p>
  </section>

);

Solutions.propTypes = {
  userSolution: PropTypes.string.isRequired,
  anotherSolution: PropTypes.string.isRequired
};

export default Solutions;
