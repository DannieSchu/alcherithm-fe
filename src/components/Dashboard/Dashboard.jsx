import React from 'react';
import { useLoading } from '../../hooks/AuthProvider';

const Dashboard = () => {
  const loading = useLoading();
  
  if(loading) return (
    <section>
      <h2>loading...</h2>
    </section>
  );

  return (
    <h2>Dashboard goes here</h2>
  );

};
export default Dashboard;
