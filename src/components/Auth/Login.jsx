import React, { useState } from 'react';
import { useLogin, useError, useLoading, useCurrentUser } from '../../hooks/AuthProvider';
import { useHistory, Link, Redirect } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();
  const user = useCurrentUser();
  const login = useLogin();
  const error = useError();
  const loading = useLoading();

  if(user) return <Redirect to = '/' />;

  const handleChange = ({ target }) => {
    if(target.name === 'email') setEmail(target.value);
    if(target.name === 'password') setPassword(target.value);
  };



  const handleLoginSubmit = async(event) => {
    event.preventDefault(); 
    login(email, password); 
  };

  // const handleLoginSubmit = event => {
  //   event.preventDefault();
  //   login(email, password)
  //     .then (() => history.push('/'));
  // };

  if(loading) return (
    <section>
      <h2>loading...</h2>
    </section>
  );

  return (
    <>
      {error && (<section> <h2>{error.message}</h2></section>)}
        
      <form onSubmit={handleLoginSubmit}>
        <input type="text" name="email" value={email} onChange={handleChange} placeholder="email" />

        <input type="password" name="password" value={password} onChange={handleChange} placeholder="password" />

        <button>Login</button>
      </form>
      <h4>Need an account? <Link to='/signup'>Sign Up</Link></h4>
    </>
  );
};

export default Login;
