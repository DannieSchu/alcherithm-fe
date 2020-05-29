import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import { useLoading, usePassingSolutionsByCategory, useCurrentUser, useUserPassed, useUserFailed, useUserAttempted, useUserTotal } from '../../hooks/AuthProvider';
import ProgressBar from '../ProgressBar/ProgressBar';
import SuccessChart from '../Charts/SuccessChart';
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

  if(user.cohort === 'N/A' && attempted === 0) return (
    <main className={styles.Dashboard}>
      <section className={styles.userProgress}>
        <section className={styles.textContainer}>
          <h2>{user.firstName}'s Dashboard!</h2>
        </section>    
      </section>
      <h2 className={styles.trySome}>try some challenges to see your stats!</h2>
    
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

  if(attempted === 0) return (
    <main className={styles.Dashboard}>
      <section className={styles.userProgress}>
        <section className={styles.textContainer}>
          <h2>{user.firstName}'s Dashboard!</h2>
          {user.Cohort && <h3>Cohort: {user.cohort}</h3>}
        </section>    
      </section>
      <h2 className={styles.trySome}>try some challenges to see your stats!</h2>
    
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
