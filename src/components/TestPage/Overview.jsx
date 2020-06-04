import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import CodeBlock from './CodeBlock';
import Tabs from '../Tabs/Tabs';
import styles from './Overview.css';

const Overview = ({ category, challengeNumber, instructions, overview, documentation, video }) => {
  const [selectedTab, setSelectedTab] = useState('Instructions');

  const handleTabChange = ({ target }) => {
    setSelectedTab(target.id);
  };

  const documentationList = documentation.map((link, i) => (
    <li key={i}>
      <a href={link} target="_blank" rel="noopener noreferrer">{link}</a>
    </li>));

  return (
    <main className={styles.Overview}>
      <Tabs 
        tabNames={['Instructions', 'Resources', 'Video']} 
        selectedTab={selectedTab} 
        onChange={handleTabChange} 
      />

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
        <div className={styles.video}>
          <iframe 
            width="560" 
            height="315" 
            src={`https://www.youtube.com/embed/${video}`} f
            rameBorder="0" 
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen 
          />
        </div>
      </section>}

    </main>
  );
};

Overview.propTypes = {
  category: PropTypes.string.isRequired,
  challengeNumber: PropTypes.number.isRequired,
  instructions: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  documentation: PropTypes.arrayOf(PropTypes.string).isRequired,
  video: PropTypes.string.isRequired
};

export default Overview;
