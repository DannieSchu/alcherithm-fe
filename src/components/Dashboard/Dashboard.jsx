import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import { useLoading } from '../../hooks/AuthProvider';
import styles from './Dashboard.css'; 
import PieChart from '../Chart.js/chart.js';

const Dashboard = () => {
  const loading = useLoading();
  
  if(loading) return (
    <section>
      <h2>loading...</h2>
    </section>
  );

  return (
    <main className={styles.Dashboard}>
      <section>
        <PieChart />
      </section>
      <section>
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
