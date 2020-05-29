import React from 'react';
import { useLoading, useCurrentUser } from '../../hooks/AuthProvider';
import { useHistory, Link } from 'react-router-dom';
import styles from './Splash.css';
import blue1 from '../../assets/hexagons/BlueHexagon.png';
import green from '../../assets/hexagons/GreenHexagon.png';
import blue2 from '../../assets/hexagons/SecondaryBlueHexagon.png';
// import combo from '../../assets/hexagons/hexagons.png';
import logo from '../../assets/logos/CenterAlignLogo.png';

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

      <section className={styles.container} >
        <img src={blue1} className={styles.hexagon} />
        <img src={blue2} className={styles.hexagon} />
        <img src={green} className={styles.hexagon} />
      </section>

      <img src={logo} />

      <section>
        <Link to='/signup'>Sign Up</Link>
        <Link to='/login'>Login</Link>
      </section>
    </main>
  );

};
export default Splash;
