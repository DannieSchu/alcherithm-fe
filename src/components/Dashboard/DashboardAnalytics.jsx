import React from 'react';
import SuccessChart from './charts/SuccessChart';
import PassedByCategoryChart from './charts/PassedByCategoryChart';
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
