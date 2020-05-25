import React from 'react';
import PropTypes from 'prop-types';
import styles from './YourSolution.css';

const YourSolution = ({ userSolution }) => (
  <section className={styles.YourSolution} >
    {userSolution}
  </section>

);

YourSolution.propTypes = {
  userSolution: PropTypes.string.isRequired
};

export default YourSolution;
