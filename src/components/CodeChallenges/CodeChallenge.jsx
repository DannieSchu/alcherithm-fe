import React from 'react';
import PropTypes from 'prop-types';

const CodeChallenge = ({ category, challengeNumber, instructions }) => (
  <section>
    <p>{category} {challengeNumber}</p>
    <p>{instructions}</p>
  </section>
);

CodeChallenge.propTypes = {
  category: PropTypes.string.isRequired,
  challengeNumber: PropTypes.number.isRequired,
  instructions: PropTypes.string.isRequired
};

export default CodeChallenge;

