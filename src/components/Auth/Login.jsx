import React, { useState } from 'react';
import { useLogin, useLogout, useError, useLoading } from '../../hooks/AuthProvider';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();
  const login = useLogin();
  const logout = useLogout();

  const handleChange = ({ target }) => {
    if(target.name === 'email') setEmail(target.value);
    if(target.name === 'password') setPassword(target.value);
  };

  const error = useError();
  const loading = useLoading();

  const handleLoginSubmit = event => {
    event.preventDefault();
    login(email, password)
      .then (() => history.push('/dashboard'));
  };

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

      <button type="button" onClick={logout}>Logout</button>
    </>
  );
};

export default Login;
