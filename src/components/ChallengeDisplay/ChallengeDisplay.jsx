import React from 'react';
import PropTypes from 'prop-types';
const ReactMarkdown = require('react-markdown');
import CodeBlock from './CodeBlock';
import styles from './ChallengeDisplay.css';

const ChallengeDisplay = ({ category, challengeNumber, instructions, overview, documentation, video }) => {
  const documentationList = documentation.map((link, i) => (
    <li key={i}>
      <a href={link}>{link}</a>
    </li>));

  return (
    <main className={styles.ChallengeDisplay}>
      
      {/* first tab */}
      <input type="radio" id="instructionsTab" name="tabbed" checked></input>
      <section className="instructions">
        <h2>
          <label htmlFor="instructionsTab">Instructions</label>
        </h2>
        <div>
          <h3>{category} {challengeNumber}</h3>
          <ReactMarkdown
            source={instructions}
            language='javascript'
            renderers={{ code: CodeBlock }}
          />
        </div>
      </section>

      {/* secound tab */}
      <input type="radio" id="resourcesTab" name="tabbed"></input>
      <section className="resources">
        <h2>
          <label htmlFor="resourcesTab">Resources</label>
        </h2>
        <div>
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
        </div>
      </section>
    </main>
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
