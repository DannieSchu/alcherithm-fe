import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import { useLoading, useCurrentUser } from '../../hooks/AuthProvider';
import styles from './Dashboard.css'; 
import PieChart from '../Chart.js/chart.js';

const Dashboard = () => {
  const loading = useLoading();
  const user = useCurrentUser();
  
  if(loading) return (
    <section>
      <h2>loading...</h2>
    </section>
  );

  return (
    <main className={styles.Dashboard}>
      <section>
        <h2>{user.firstName}'s Dashboard!</h2>
        <h3>Cohort: {user.cohort}</h3>

        <PieChart />
        
      </section>

      <section>
        <Link to="/challenges">
          <Button buttonStyle="primary" backgroundColor="green" buttonSize="large" buttonText="Find a Challenge" />
        </Link>

        <Link to="/history">
          <Button buttonStyle="primary" backgroundColor="green" buttonSize="large" buttonText="View Completed Challenges" />
        </Link>
      </section>
    </main>
  );

};
export default Dashboard;
