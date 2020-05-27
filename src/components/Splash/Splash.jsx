import React from 'react';
import { useLoading, useCurrentUser } from '../../hooks/AuthProvider';
import { useHistory, Link } from 'react-router-dom';
import logo from '../../assets/LogoWhiteDescription.png';
import styles from './Splash.css';

const Splash = () => {
  const user = useCurrentUser();
  const history = useHistory();
  const loading = useLoading();

  if(loading) return (
    <section>
      <h2>loading...</h2>
    </section>
  );

  if(user)
    history.push('/dashboard');

  return (
    <body className={styles.Splash}>
      <section>
        <img src={logo} />
        {/* <h2>Alcherithm</h2> */}
      </section>
      <nav>
        <Link to='/signup'>Sign Up</Link>
        <Link to='/login'>Login</Link>
      </nav>
    </body>

  );

};
export default Splash;
