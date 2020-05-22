import React from 'react';
import PropTypes from 'prop-types';

const ChallengeDisplay = ({ category, challengeNumber, instructions, overview, documentation, video }) => (
  <>
    <section className="instructions">
      <h3>{category} {challengeNumber}</h3>
      <p>{instructions}</p>
    </section>
    <section className="resources">
      <p>{overview}</p>
      <p>{documentation}</p>
      <p>{video}</p>
    </section>
  </>
);

ChallengeDisplay.propTypes = {
  category: PropTypes.string.isRequired,
  challengeNumber: PropTypes.number.isRequired,
  instructions: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  documentation: PropTypes.array.isRequired,
  video: PropTypes.string.isRequired
};

export default ChallengeDisplay;
