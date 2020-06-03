import React from 'react';
import SuccessChart from '../Charts/SuccessChart';
import PassedByCategoryChart from '../Charts/PassedByCategoryChart';
import styles from './DashboardAnalytics.css';

const DashboardAnalytics = () => {
  return (
    <section className={styles.DashboardAnalytics}>
      <SuccessChart />
      <PassedByCategoryChart />
    </section>
  );
};

export default DashboardAnalytics;
