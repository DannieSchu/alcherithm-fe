import React from 'react';
import { useLoading, useCurrentUser } from '../../hooks/AuthProvider';
import { useHistory } from 'react-router-dom';

const History = () => {
  const history = useHistory();
  const user = useCurrentUser();
  const loading = useLoading();
  
  if(loading) return (
    <section>
      <h2>loading...</h2>
    </section>
  );

  if(!user)
    history.push('/splash');

  return (
    <h2>History goes here</h2>
  );

};
export default History;
