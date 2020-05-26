import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import { useLoading } from '../../hooks/AuthProvider';

const Dashboard = () => {
  const loading = useLoading();
  
  if(loading) return (
    <section>
      <h2>loading...</h2>
    </section>
  );

  return (
    <>
      <h2>Dashboard goes here</h2>

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
    </>
  );

};
export default Dashboard;
