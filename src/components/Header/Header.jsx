import React from 'react';
import styles from './Header.css';
import logo from '../../assets/LogoWhiteTextLeft.png';
import { Link } from 'react-router-dom';
import { useLogout, useCurrentUser, useLoading, useUserPassed, useUserTotal } from '../../hooks/AuthProvider';

const Header = () => {
  const logout = useLogout();
  const user = useCurrentUser();
  const loading = useLoading();
  const passed = useUserPassed();
  const total = useUserTotal();

  if(loading) return null;

  return (
    <>
      <header className={styles.Header}>
      
        <Link className={styles.image} to='/'><img className={styles.logo} src={logo} /></Link>

        <div className={styles.User}>
          {user && <h3>Hello <Link className={styles.nameLink} to='/'>{user?.firstName}</Link></h3>}
          {passed && <h4>Successful Challenges: {passed} / {total}</h4>}
        </div>

        <nav className={styles.navbar}>
          {user && 
          <>
            <Link className={styles.navLink} to='/'>Dashboard</Link>
            <Link className={styles.navLink} to='/challenges'>Challenges</Link>
            <Link className={styles.navLink} to='/history'>History</Link>
          </> }
          {!user && 
          <>
            <Link className={styles.navLink} to='/signup'>Sign Up</Link>
            <Link className={styles.navLink} to='/login'>Login</Link>
          </> }
          <Link className={styles.navLink} to='/about'>About</Link>
          {user &&
          <>
            <Link className={styles.navLink} onClick={logout}>Logout</Link>
          </>
          }
        </nav>
      </header>
    </>
  );
};

export default Header; 
