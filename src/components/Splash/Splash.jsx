import React from 'react';
import { useCurrentUser } from '../../hooks/AuthProvider';
import { useHistory, Link } from 'react-router-dom';
import combo from '../../assets/hexagons/hexagons.png';
import logo2 from '../../assets/logos/LogoCharcoal.png';
import styles from './Splash.css';

const Splash = () => {
  const user = useCurrentUser();
  const history = useHistory();

  if(user)
    history.push('/dashboard');

  return (
    <main className={styles.Splash}>

      <aside>
        <img src={logo2} />
      </aside>

      <section className={styles.links}> 
        <Link to='/signup'>Sign Up</Link>
      </section>

      <section className={styles.links}> 
        <Link to='/login'>Login</Link>
      </section>

      <section className={styles.container} >
        <img src={combo} className={styles.hexagon} />
      </section>

    </main>
  );
};

export default Splash;
