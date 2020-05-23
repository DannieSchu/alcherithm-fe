import React, { useState } from 'react';
import { useSignUp, useLogin, useLogout, useError, useLoading } from '../../hooks/AuthProvider';
import { useHistory } from 'react-router-dom';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [cohort, setCohort] = useState('');
  const [avatar, setAvatar] = useState('');

  const history = useHistory();
  const signup = useSignUp();
  const login = useLogin();
  const logout = useLogout();

  const handleChange = ({ target }) => {
    if(target.name === 'email') setEmail(target.value);
    if(target.name === 'password') setPassword(target.value);
    if(target.name === 'firstName') setFirstName(target.value);
    if(target.name === 'lastName') setLastName(target.value);
    if(target.name === 'cohort') setCohort(target.value);
    if(target.name === 'avatar') setAvatar(target.value);
  };

  const error = useError();
  const loading = useLoading();

  const handleSignUpSubmit = event => {
    event.preventDefault();
    signup(email, password, firstName, lastName, cohort, avatar)
      .then (() => history.push('/challenges'));
  };

  const handleLoginSubmit = event => {
    event.preventDefault();
    login(email, password)
      .then (() => history.push('/challenges'));
  };

  if(loading) return (
    <section>
      <h2>loading...</h2>
    </section>
  );

  return (
    <>
      {error && (<section> <h2>{error}</h2></section>)}

      <form onSubmit={handleSignUpSubmit}>
        <input type="text" name="email" value={email} onChange={handleChange} placeholder="email" />

        <input type="password" name="password" value={password} onChange={handleChange} placeholder="password" />

        <input type="text" name="firstName" value={firstName} onChange={handleChange} placeholder="first name" />

        <input type="text" name="lastName" value={lastName} onChange={handleChange} placeholder="last name" />

        <input type="text" name="cohort" value={cohort} onChange={handleChange} placeholder="cohort" />

        <input type="text" name="avatar" value={avatar} onChange={handleChange} placeholder="avatar" />

        <button>Signup</button>
      </form>
        
      <form onSubmit={handleLoginSubmit}>
        <input type="text" name="email" value={email} onChange={handleChange} placeholder="email" />

        <input type="password" name="password" value={password} onChange={handleChange} placeholder="password" />

        <button>Login</button>
      </form>

      <button type="button" onClick={logout}>Logout</button>
    </>
  );
};

export default Auth;
