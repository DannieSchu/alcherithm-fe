import React, { useState } from 'react';
import PropTypes from 'prop-types';
const ReactMarkdown = require('react-markdown');
import CodeBlock from './CodeBlock';
import styles from './ChallengeDisplay.css';

const ChallengeDisplay = ({ category, challengeNumber, instructions, overview, documentation, video }) => {
  const [selectedTab, setSelectedTab] = useState('Instructions');

  const handleTabChange = ({ target }) => {
    setSelectedTab(target.id);
  };

  const documentationList = documentation.map((link, i) => (
    <li key={i}>
      <a href={link} target="_blank" rel="noopener noreferrer">{link}</a>
    </li>));

  return (
    <main className={styles.ChallengeDisplay}>

      <section className={styles.tabs}>
        <input type="radio" id="Instructions" name="tabbed" onChange={handleTabChange}></input>
        <input type="radio" id="Resources" name="tabbed" onChange={handleTabChange}></input>
        <input type="radio" id="Video" name="tabbed" onChange={handleTabChange}></input>

        <label htmlFor="Instructions" className={selectedTab === 'Instructions' && styles.active}>Instructions</label>
        <label htmlFor="Resources" className={selectedTab === 'Resources' && styles.active}>Resources</label>
        <label htmlFor="Video" className={selectedTab === 'Video' && styles.active}>Video</label>
      </section>

      {selectedTab === 'Instructions' && <section className={styles.content}>
        <h3>{category} {challengeNumber}</h3>
        <ReactMarkdown
          source={instructions}
          language='javascript'
          renderers={{ code: CodeBlock }} />
      </section>}

      {selectedTab === 'Resources' && <section className={styles.content}>
        <ReactMarkdown
          source={overview}
          language='javascript'
          renderers={{ code: CodeBlock }}
        />
        <h4>References</h4>
        <ul>
          {documentationList}
        </ul>
      </section>}

      {selectedTab === 'Video' && <section className={styles.content}>
        <h3>{category} Video</h3>
        <p>
          <iframe width="560" height="315" src={`https://www.youtube.com/embed/${video}`} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></p>
      </section>}

    </main>
  );
};

ChallengeDisplay.propTypes = {
  category: PropTypes.string.isRequired,
  challengeNumber: PropTypes.number.isRequired,
  instructions: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  documentation: PropTypes.arrayOf(PropTypes.shape(PropTypes.string)).isRequired,
  video: PropTypes.string.isRequired
};

export default ChallengeDisplay;
