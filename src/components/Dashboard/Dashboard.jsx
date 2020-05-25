import React from 'react';
import { loading, useCurrentUser } from '../../hooks/AuthProvider';
import { useHistory } from 'react-router-dom';

const Dashboard = () => {
  const history = useHistory();
  const user = useCurrentUser();
  
  if(loading) return (
    <section>
      <h2>loading...</h2>
    </section>
  );

  if(!user)
    history.push('/login');

  return (
    <h2>hi!</h2>
  );

};
export default Dashboard;
