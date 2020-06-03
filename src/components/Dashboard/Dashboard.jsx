import React from 'react';
import { Link } from 'react-router-dom';
import Loading from '../Loading/Loading';
import Button from '../Button/Button';
import ProgressBar from '../ProgressBar/ProgressBar';
import SuccessChart from '../Charts/SuccessChart';
import PassedByCategoryChart from '../Charts/PassedByCategoryChart';
import { useCurrentUser, useUserAttempted } from '../../hooks/AuthProvider';
import styles from './Dashboard.css'; 

const Dashboard = () => {
  const user = useCurrentUser();
  const attempted = useUserAttempted();

  if(!user) return <Loading />;

  if(user.cohort === 'N/A' && attempted === 0) return (
    <main className={styles.DashboardAttemptedZero}>
      <section className={styles.userProgress}>
        <section className={styles.textContainer}>
          <h2>{user.firstName}'s Dashboard!</h2>
        </section>    
      </section>
      <h2 className={styles.trySome}>try some challenges to see your stats!</h2>
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

  if(user.cohort === 'N/A') return (
    <main className={styles.Dashboard}>
      <section className={styles.userProgress}>
        <section className={styles.textContainer}>
          <h2>{user.firstName}'s Dashboard!</h2>
        </section>
        <ProgressBar />
      </section>
      <section className={styles.charts}>
        <SuccessChart />
        <PassedByCategoryChart />
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

  if(attempted === 0) return (
    <main className={styles.DashboardAttemptedZero}>
      <section className={styles.userProgress}>
        <section className={styles.textContainer}>
          <h2>{user.firstName}'s Dashboard!</h2>
          {user.Cohort && <h3>Cohort: {user.cohort}</h3>}
        </section>    
      </section>
      <h2 className={styles.trySome}>try some challenges to see your stats!</h2>
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

  return (
    <main className={styles.Dashboard}>
      <section className={styles.userProgress}>
        <section className={styles.textContainer}>
          <h2>{user.firstName}'s Dashboard!</h2>
          {user.Cohort && <h3>Cohort: {user.cohort}</h3>}
        </section>
        <ProgressBar />
      </section>
      <section className={styles.charts}>
        <SuccessChart />
        <PassedByCategoryChart />
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
