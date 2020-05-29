import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import { useLoading, usePassingSolutionsByCategory, useCurrentUser, useUserPassed, useUserFailed, useUserAttempted, useUserTotal } from '../../hooks/AuthProvider';
import ProgressBar from '../ProgressBar/ProgressBar';
import SuccessChart from '../Charts/SuccessChart';
import PassedByCategoryChart from '../Charts/PassedByCategoryChart';
import styles from './Dashboard.css'; 

const Dashboard = () => {
  const loading = useLoading();
  const user = useCurrentUser();
  const userSolutionsByCategory = usePassingSolutionsByCategory();
  const passed = useUserPassed();
  const failed = useUserFailed();
  const attempted = useUserAttempted();
  const total = useUserTotal();

  console.log(userSolutionsByCategory);
  console.log('passed: ' + passed);
  console.log('failed: ' + failed);
  console.log('attempted: ' + attempted);
  console.log('total: ' + total);
  
  if(loading) return (
    <section>
      <h2>loading...</h2>
    </section>
  );

  return (
    <main className={styles.Dashboard}>
      <section className={styles.userProgress}>
        <section className={styles.textContainer}>
          <h2>{user.firstName}'s Dashboard!</h2>
          <h3>Cohort: {user.cohort}</h3>
        </section>
        <ProgressBar />
      </section>
      <section className={styles.charts}>
        <SuccessChart />
        <PassedByCategoryChart />
      </section>
      
      <section className={styles.buttons}>
        <Link to="/challenges">
          <Button buttonStyle="primary" backgroundColor="green" buttonSize="large" buttonText="Find a Challenge" />
        </Link>
        <Link to="/history">
          <Button buttonStyle="primary" backgroundColor="mainBlue" buttonSize="large" buttonText="View Completed Challenges" />
        </Link>
      </section>
    </main>
  );
};

export default Dashboard;
