//write some functions for login, signup, currentUser, logout, verify

import React, { createContext, useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { postSignup, postLogin, getLogout, getVerify } from '../services/authAPI';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getVerify()
      .then(user => setUser(user))
      .finally(() => setLoading(false));
  });

  const signup = (email, password, firstName, lastName, cohort, avatar) => {
    setLoading(true);
    return postSignup(email, password, firstName, lastName, cohort, avatar)
      .then(user => setUser(user))
      .catch(error => setError(error))
      .finally(() => setLoading(false));
  };

  const login = (email, password) => {
    setLoading(true);
    return postLogin(email, password)
      .then(user => setUser(user))
      .catch(error => setError(error))
      .finally(() => setLoading(false));
  };

  const currentUser = (user) => {
    return user;
  };

  const logout = (user) => {
    return getLogout(user)
      .then(() => setUser(null));
  };

  // const logout = (user) => {
  //   return getLogout(user)
  //     .then (setUser(null));
  // };

  // const handleChange = () => {

  // };

  // const signupHandler = () => {

  // };

  // const loginHandler = () => {

  // };

  return (
    <AuthContext.Provider value={{ user, signup, login, currentUser, logout, error, loading }}>
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

export const useCurrentUser = () => {
  const { currentUser } = useContext(AuthContext);
  return currentUser;
};

export const useLogout = () => {
  const { logout } = useContext(AuthContext);
  return logout;
};

export const useVerify = () => {
  const { verify } = useContext(AuthContext);
  return verify;
};

export const useError = () => {
  const { error } = useContext(AuthContext);
  return error;
};

export const useLoading = () => {
  const { loading } = useContext(AuthContext);
  return loading;
};

