//write some functions for login, signup, currentUser, logout, verify

import React, { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { postSignup, postLogin } from '../services/authAPI';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const signup = (email, password, firstName, lastName, cohort, avatar) => {
    return postSignup(email, password, firstName, lastName, cohort, avatar)
      .then (user => setUser(user));
  };

  const login = (email, password) => {
    return postLogin(email, password)
      .then (user => setUser(user));
  };

  return (
    <AuthContext.Provider value={{ user, signup, login }}>
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

export const useLogin = () => {
  const { login } = useContext(AuthContext);
  return login;
};
