import React from 'react';
import PropTypes from 'prop-types';
import styles from './ChallengeItem.css';

const ChallengeItem = ({ category, challengeNumber, instructions, solutions, char }) => {
  const slicedInstructions = `${instructions.slice(0, char)}...`;
  const icon = solutions[0].passed ? '✔' : '✖️';

  return (
    <section className={styles.ChallengeItem}>
      <h3>{category} {challengeNumber}</h3>
      <p>{slicedInstructions}</p>
      {solutions[0].date && <div><h4>{icon}</h4><h4>{solutions[0].date}</h4></div>}
    </section>
  );
};

ChallengeItem.propTypes = {
  category: PropTypes.string.isRequired,
  challengeNumber: PropTypes.number.isRequired,
  instructions: PropTypes.string.isRequired,
  solutions: PropTypes.arrayOf(PropTypes.shape({
    passed: PropTypes.boolean,
    date: PropTypes.string
  })),
  char: PropTypes.number.isRequired
};

export default ChallengeItem;
