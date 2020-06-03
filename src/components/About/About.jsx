import React from 'react';
import Developer from './Developer';
import githubIcon from '../../assets/profile/Github-Icon.png';
import { developers } from '../../utils/developers';
import styles from './About.css';

const About = () => {
  const developerElements = developers.map(developer => <Developer key={developer.name} {...developer} />);

  return (
    <main className={styles.devs}>
      <section>
        <div className={styles.teamdev}>
          <a href="https://github.com/Alcherithm" target="_blank" rel="noopener noreferrer">
            <h1>Alcherithm</h1>
            <img src={githubIcon} alt="github-icon" className={styles.icons} />
          </a>
          <p className={styles.overview}>Alcherithm - a code companion. Junior software developers often struggle with the learning process of code challenges. This learning platform combines resources, videos and documentation to help developers build a foundation. Users can not only practice from our library of code challenges, but they can also review past attempts at various problems. We invite you take the Alcherithm challenge; happy coding!</p>
        </div>
      </section>
      <section>
        {developerElements}
      </section>
    </main>
  );
};

export default About;
