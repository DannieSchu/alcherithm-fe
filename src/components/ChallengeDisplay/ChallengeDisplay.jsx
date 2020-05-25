import React from 'react';
import PropTypes from 'prop-types';
const ReactMarkdown = require('react-markdown');
import CodeBlock from './CodeBlock';

const ChallengeDisplay = ({ category, challengeNumber, instructions, overview, documentation, video }) => {
  const documentationList = documentation.map((link, i) => (
    <li key={i}>
      <a href={link}>{link}</a>
    </li>));

  return (
    <>
      <section className="instructions">
        <h3>{category} {challengeNumber}</h3>
        <p>{instructions}</p>
      </section>
      <section className="resources">
        <ReactMarkdown
          source={overview}
          language='javascript'
          renderers={{ code: CodeBlock }}
        />
        <h4>References</h4>
        <ul>
          {documentationList}
        </ul>
        <p>{video}</p>
      </section>
    </>
  );
};

ChallengeDisplay.propTypes = {
  category: PropTypes.string.isRequired,
  challengeNumber: PropTypes.number.isRequired,
  instructions: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  documentation: PropTypes.array.isRequired,
  video: PropTypes.string.isRequired
};

export default ChallengeDisplay;
