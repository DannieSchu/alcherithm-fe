import React from 'react';
import { useSignUp, useHandleChange, useSignupHandler, useLoginHandler } from '../../hooks/AuthProvider';

const Auth = () => {
  // const {
  //   email,
  //   password,
  //   firstName,
  //   lastName,
  //   cohort,
  //   avatar
  // } = useSignUp();

  const { signup } = useSignUp();

  const handleChange = useHandleChange();

  const signupHandler = useSignupHandler();

  const loginHandler = useLoginHandler();



  return (
    <>
      <form onSubmit={signupHandler}>
        <input type="text" name="email" value={email} onChange={handleChange} placeholder="email" />

        <input type="password" name="password" value={password} onChange={handleChange} placeholder="password" />

        <input type="text" name="firstName" value={firstName} onChange={handleChange} placeholder="first name" />

        <input type="text" name="lastName" value={lastName} onChange={handleChange} placeholder="last name" />

        <input type="text" name="cohort" value={cohort} onChange={handleChange} placeholder="cohort" />

        <input type="text" name="avatar" value={avatar} onChange={handleChange} placeholder="avatar" />

        <button type="button" onClick={signupHandler}>Signup</button>

      </form>
        
      <form onSubmit={loginHandler}>
        <input type="text" name="email" value={email} onChange={handleChange} placeholder="email" />

        <input type="password" name="password" value={password} onChange={handleChange} placeholder="password" />

        <button type="button" onClick={loginHandler}>Login</button>
      </form>
    </>
  );
};

export default Auth;
