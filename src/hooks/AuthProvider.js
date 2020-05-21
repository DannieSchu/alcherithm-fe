//write some functions for login, signup, currentUser, logout, verify

import React, { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { postSignup } from '../services/authAPI';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const signup = (email, password, firstName, lastName) => {
    return postSignup(email, password, firstName, lastName)
      .then (user => setUser(user));
  };

  return (
    <AuthContext.Provider value={{ user, signup }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node
};

export const useSignUp = () =>{
  const { signup } = useContext(AuthContext);
  return signup;
};
