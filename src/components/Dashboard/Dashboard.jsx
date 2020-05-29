import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import { useLoading, usePassingSolutionsByCategory, useCurrentUser } from '../../hooks/AuthProvider';
import ProgressBar from '../ProgressBar/ProgressBar';
import SuccessChart from '../Charts/SuccessChart';
import styles from './Dashboard.css'; 

const Dashboard = () => {
  const loading = useLoading();
  const user = useCurrentUser();
  const userSolutionsByCategory = usePassingSolutionsByCategory();


  console.log(userSolutionsByCategory[0]);
  
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
