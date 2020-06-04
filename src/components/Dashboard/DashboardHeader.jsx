import React from 'react';
import PropTypes from 'prop-types';
import ProgressBar from './charts/ProgressBar';
import styles from './DashboardHeader.css';

const DashboardHeader = ({ firstName, cohort, attempted }) => (
  <section className={styles.DashboardHeader}>
    <section className={styles.textContainer}>
      <h2>{firstName}'s Dashboard!</h2>
      {cohort !== 'N/A' && <h3>Cohort: {cohort}</h3>}
    </section>
    {attempted && <ProgressBar />}
  </section>
);

DashboardHeader.propTypes = {
  firstName: PropTypes.string.isRequired,
  cohort: PropTypes.string,
  attempted: PropTypes.number
};

export default DashboardHeader;
