import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Button from '../../components/Button/Button';
import { useSignUp, useError, useCurrentUser } from '../../hooks/AuthProvider';
import { cohortsDropdown } from '../../utils/cohorts';
import styles from './SignUp.css';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [cohort, setCohort] = useState('');
  const [avatar, setAvatar] = useState('');

  const signup = useSignUp();
  const user = useCurrentUser();

  if(user) return <Redirect to = '/' />;

  const cohortOptions = cohortsDropdown.map(cohorts => (
    <option key={cohorts} value={cohorts}>{cohorts}</option>
  ));

  const handleChange = ({ target }) => {
    if(target.name === 'email') setEmail(target.value);
    if(target.name === 'password') setPassword(target.value);
    if(target.name === 'firstName') setFirstName(target.value);
    if(target.name === 'lastName') setLastName(target.value);
    if(target.name === 'cohort') setCohort(target.value);
    if(target.name === 'avatar') setAvatar(target.value);
  };

  const error = useError();

  const handleSignUpSubmit = event => {
    event.preventDefault();
    signup(email, password, firstName, lastName, cohort, avatar);
  };

  return (
    <>
      <form className={styles.formWrap} onSubmit={handleSignUpSubmit}>
        <input className={styles.inputForm} type="text" name="email" value={email} onChange={handleChange} placeholder="email" />
        <input className={styles.inputForm} type="password" name="password" value={password} onChange={handleChange} placeholder="password" />
        <input className={styles.inputForm} type="text" name="firstName" value={firstName} onChange={handleChange} placeholder="first name" />
        <input className={styles.inputForm} type="text" name="lastName" value={lastName} onChange={handleChange} placeholder="last name" />

        <select className={styles.cohortDropdown} id="cohort" onChange={({ target }) => setCohort(target.value)}>
          <option value="allCohorts">&nbsp;&nbsp;choose cohort</option>
          {cohortOptions}
        </select>

        <div className={styles.signUpButton}>
          <Button buttonStyle="primary" backgroundColor="mainBlue" buttonSize="small" buttonText="Sign Up" />
        </div>
      </form>
      <h4 className={styles.haveAccount}>Already have an account? <Link to='/login'>Login</Link></h4>
      {error && (<section className={styles.errorDisplay}> <h4>{error.message}</h4></section>)}
    </>
  );
};

export default SignUp;
