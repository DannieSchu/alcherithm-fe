import React from 'react';
import styles from './Header.css';
import logo from '../../assets/IconWhite.png';
import { Link } from 'react-router-dom';
import { useLogout, useCurrentUser, useLoading } from '../../hooks/AuthProvider';

const Header = () => {
  const logout = useLogout();
  const user = useCurrentUser();
  const loading = useLoading();
  
  if(loading) return (
    <>
    </>
  );
  
  return (
    <>
      <header className={styles.Header}>
        <h2 className={styles.Alcherithm}><Link to='/'><img src={logo} />Alcherithm</Link></h2>
        <nav>
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
        </nav>
        <div className={styles.User}>
          {user && <h3>hello {user?.firstName}</h3>}
        </div>
        {user && <button type="button" onClick={logout}>Logout</button>}
      </header>
    </>
  );
};

export default Header; 
