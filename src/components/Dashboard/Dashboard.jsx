import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
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
          <Button>
            <p>Find a Challenge</p>
          </Button>
        </Link>

        <Link to="/history">
          <Button>
            <p>View Completed Challenges</p>
          </Button>
        </Link>
      </section>
    </main>
  );

};
export default Dashboard;
