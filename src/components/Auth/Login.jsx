import React, { useState } from 'react';
import { useLogin, useError, useLoading, useCurrentUser } from '../../hooks/AuthProvider';
import { Link, Redirect } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const user = useCurrentUser();
  const login = useLogin();
  const error = useError();
  const loading = useLoading();

  if(user) return <Redirect to = '/' />;

  const handleChange = ({ target }) => {
    if(target.name === 'email') setEmail(target.value);
    if(target.name === 'password') setPassword(target.value);
  };

  const handleLoginSubmit = (event) => {
    event.preventDefault(); 
    login(email, password); 
  };

  if(loading) return (
    <section>
      <h2>loading...</h2>
    </section>
  );

  return (
    <>
      <form onSubmit={handleLoginSubmit}>
        <input type="text" name="email" value={email} onChange={handleChange} placeholder="email" />

        <input type="password" name="password" value={password} onChange={handleChange} placeholder="password" />

        <button>Login</button>
      </form>
      {error && (<section> <h4>{error.message}</h4></section>)}
      <h4>Need an account? <Link to='/signup'>Sign Up</Link></h4>
    </>
  );
};

export default Login;
