import React, { useState } from 'react';
import { useSignUp, useError, useLoading } from '../../hooks/AuthProvider';
import { useHistory, Link } from 'react-router-dom';
import { cohortsDropdown } from '../../utils/cohorts';
import styles from './SignUp.css';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [cohort, setCohort] = useState('');
  const [avatar, setAvatar] = useState('');

  const history = useHistory();
  const signup = useSignUp();

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
  const loading = useLoading();

  const handleSignUpSubmit = event => {
    event.preventDefault();
    signup(email, password, firstName, lastName, cohort, avatar)
      .then (() => history.push('/'));
  };

  if(loading) return (
    <section>
      <h2>loading...</h2>
    </section>
  );

  return (
    <>
      {error && (<section> <h2>{error.message}</h2></section>)}

      <form onSubmit={handleSignUpSubmit}>
        <input type="text" name="email" value={email} onChange={handleChange} placeholder="email" />

        <input type="password" name="password" value={password} onChange={handleChange} placeholder="password" />

        <input type="text" name="firstName" value={firstName} onChange={handleChange} placeholder="first name" />

        <input type="text" name="lastName" value={lastName} onChange={handleChange} placeholder="last name" />

        {/* <input type="text" name="cohort" value={cohort} onChange={handleChange} placeholder="cohort" /> */}

        <select className={styles.SignUp} id="cohort" onChange={({ target }) => setCohort(target.value)}>
          <option value="allCohorts">Choose Cohort</option>
          {cohortOptions}
        </select>

        <input type="text" name="avatar" value={avatar} onChange={handleChange} placeholder="avatar" />

        <button>Sign up</button>
      </form>
      <h4>Already have an account? <Link to='/login'>Login</Link></h4>
    </>
  );
};

export default SignUp;
