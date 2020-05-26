import React from 'react';
import { Link } from 'react-router-dom';
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
      <Link to='/challenges'>Find a Challenge</Link>
      <Link to='/history'>View Completed Challenges</Link>
    </>
  );

};
export default Dashboard;
