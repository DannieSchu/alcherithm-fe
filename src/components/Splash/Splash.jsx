import React from 'react';
import { useLoading, useCurrentUser } from '../../hooks/AuthProvider';
import { useHistory, Link } from 'react-router-dom';
import styles from './Splash.css';
import blue1 from '../../assets/hexagons/BlueHexagon.png';
import green from '../../assets/hexagons/GreenHexagon.png';
import blue2 from '../../assets/hexagons/SecondaryBlueHexagon.png';
import combo from '../../assets/hexagons/hexagons.png';
import logo from '../../assets/logos/CenterAlignLogo.png';
import logo2 from '../../assets/logos/LogoCharcoal.png';

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
