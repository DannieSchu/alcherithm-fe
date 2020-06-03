import React from 'react';
import PropTypes from 'prop-types';
import githubIcon from '../../assets/profile/Github-Icon.png';
import linkedInIcon from '../../assets/profile/LinkedIn-Icon.png';
import styles from './Developer.css';

const Developer = ({ name, image, gitHub, linkedIn, description }) => (
  <div className={styles.dev}>
    <img src={image} alt={`${name} Profile Picture`} />
    <div className={styles.links}>
      <a href={gitHub} target="_blank" rel="noopener noreferrer">
        <img src={githubIcon} alt="github-icon" className={styles.icons} />
      </a>
      <a href={linkedIn} target="_blank" rel="noopener noreferrer">
        <img src={linkedInIcon} alt="LinkedIn icon" className={styles.icons}></img>
      </a>
    </div>
    <p>{description}</p>
  </div>
);

Developer.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  gitHub: PropTypes.string.isRequired,
  linkedIn: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Developer;
