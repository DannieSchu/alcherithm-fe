import React from 'react';
import styles from './Header.css';
import logo from '../../assets/IconWhite.png';
import { Link } from 'react-router-dom';
import { useLogout, useCurrentUser, loading } from '../../hooks/AuthProvider';

const Header = () => {
  const logout = useLogout();
  const user = useCurrentUser();
  // console.log(user);
  if(loading) return (
    <section>
      <h2>loading...</h2>
    </section>
  );

  return (
    <>
      <header className={styles.Header}>
        <img src={logo} />
        <h2>Alcherithm</h2>
        <nav>
          <Link to='/'>Dashboard</Link>
          <Link to='/challenges'>Challenges</Link>
          <Link to='/history'>History</Link>
          <button type="button" onClick={logout}>Logout</button>
        </nav>
      </header>
    </>
  );
};

export default Header; 


// this.props.history.push('/login');
{/* <button type="button" onClick={logout}>Logout</button>; */}
