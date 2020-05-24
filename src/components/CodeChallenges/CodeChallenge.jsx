import React from 'react';
import PropTypes from 'prop-types';
import styles from './CodeChallenge.css';

const CodeChallenge = ({ category, challengeNumber, instructions }) => {
  const slicedInstructions = `${instructions.slice(0, 100)}...`;
  
  return (
    <section className={styles.CodeChallenge}>
      <h3>{category} {challengeNumber}</h3>
      <p>{slicedInstructions}</p>
    </section>
  );
};

CodeChallenge.propTypes = {
  category: PropTypes.string.isRequired,
  challengeNumber: PropTypes.number.isRequired,
  instructions: PropTypes.string.isRequired
};

export default CodeChallenge;

