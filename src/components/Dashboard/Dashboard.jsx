import React from 'react';
import { Link } from 'react-router-dom';
import Loading from '../Loading/Loading';
import Button from '../Button/Button';
import DashboardHeader from './DashboardHeader';
import DashboardAnalytics from './DashboardAnalytics';

import { useCurrentUser, useUserAttempted } from '../../hooks/AuthProvider';
import styles from './Dashboard.css';

const Dashboard = () => {
  const user = useCurrentUser();
  const attempted = useUserAttempted();

  if(!user) return <Loading />;

  return (
    <main className={styles.Dashboard}>
      <section className={styles.box}>
        <DashboardHeader {...user} attempted={attempted} />
        {attempted ? <DashboardAnalytics /> : <h2>Try some challenges to see your stats!</h2>}
      </section>
      <section className={styles.buttons}>
        <Link to="/challenges">
          <Button buttonStyle="primary" backgroundColor="green" buttonSize="large">Find a Challenge</Button>
        </Link>
        <Link to="/history">
          <Button buttonStyle="primary" backgroundColor="mainBlue" buttonSize="large">View History</Button>
        </Link>
      </section>
    </main>
  );
};

export default Dashboard;
