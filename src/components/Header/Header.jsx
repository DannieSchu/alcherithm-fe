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
        <h2><Link to='/'><img src={logo} />Alcherithm</Link></h2>
        <nav>
          {user && 
          <>
            <Link to='/'>Dashboard</Link>
            <Link to='/challenges'>Challenges</Link>
            <Link to='/history'>History</Link>
          </> }
          {!user && 
          <>
            <Link to='/signup'>Sign Up</Link>
            <Link to='/login'>Login</Link>
          </> }
          <Link to='/about'>About</Link>
          {user && <button type="button" onClick={logout}>Logout</button>}
        </nav>
        {user && <h3>hello {user?.firstName}</h3>}
      </header>
    </>
  );
};

export default Header; 
