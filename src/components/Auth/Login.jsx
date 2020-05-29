import React, { useState } from 'react';
import { useLogin, useError, useLoading, useCurrentUser } from '../../hooks/AuthProvider';
import Button from '../../components/Button/Button';
import { Link, Redirect } from 'react-router-dom';
import styles from './Login.css';

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
      <form className={styles.formWrap} onSubmit={handleLoginSubmit}>
        <input className={styles.inputForm} type="text" name="email" value={email} onChange={handleChange} placeholder="email" />
        <input className={styles.inputForm} type="password" name="password" value={password} onChange={handleChange} placeholder="password" />
        <div className={styles.loginButton}>
          <Button className={styles.loginButton} buttonStyle="primary" backgroundColor="mainBlue" buttonSize="small" buttonText="Login" />
        </div>
      </form>
      <h4 className={styles.needAccount}>Don't have an account? <Link to='/signup'>Sign Up</Link></h4>
      {error && (<section className={styles.errorDisplay}><h4>{error.message}</h4></section>)}
    </>
  );
};

export default Login;
