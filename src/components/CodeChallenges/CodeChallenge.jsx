import React from 'react';
import PropTypes from 'prop-types';
import styles from './CodeChallenge.css';

const CodeChallenge = ({ category, challengeNumber, instructions, solutions }) => {
  const slicedInstructions = `${instructions.slice(0, 100)}...`;
  const icon = solutions[0].passed ? '✔' : '✖️';

  return (
    <section className={styles.CodeChallenge}>
      <h3>{category} {challengeNumber}</h3>
      <p>{slicedInstructions}</p>
      {solutions[0]?.date && <div><h4>{icon}</h4><h4>{solutions[0].date}</h4></div>}
    </section>
  );
};

CodeChallenge.propTypes = {
  category: PropTypes.string.isRequired,
  challengeNumber: PropTypes.number.isRequired,
  instructions: PropTypes.string.isRequired,
  solutions: PropTypes.arrayOf(PropTypes.shape({
    passed: PropTypes.boolean,
    date: PropTypes.string
  }))
};

export default CodeChallenge;
