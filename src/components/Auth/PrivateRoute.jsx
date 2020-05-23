import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useCurrentUser, useLoading } from '../../hooks/AuthProvider';

const PrivateRoute = (props) => {
  const user = useCurrentUser();
  const loading = useLoading();

  if(!user && !loading) {
    return <Redirect to="/auth" />;
  }

  if(loading) {
    return <h1>Loading</h1>;
  }

  // if we are logged in route normally
  return <Route {...props} />;
};

export default PrivateRoute;
