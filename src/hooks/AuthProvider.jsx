//write some functions for login, signup, currentUser, logout, verify

import React, { createContext, useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { postSignup, postLogin, getLogout, getVerify } from '../services/authAPI';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    getVerify()
      .then(user => setUser(user));
  });

  const signup = (email, password, firstName, lastName, cohort, avatar) => {
    return postSignup(email, password, firstName, lastName, cohort, avatar)
      .then(user => setUser(user));
  };

  const login = (email, password) => {
    return postLogin(email, password)
      .then(user => setUser(user));
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

  const handleChange = () => {

  };

  const signupHandler = () => {

  };

  const loginHandler = () => {

  };

  return (
    <AuthContext.Provider value={{ user, signup, login, currentUser, logout, handleChange, signupHandler, loginHandler }}>
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

export const useHandleChange = () => {
  const { handleChange } = useContext(AuthContext);
  return handleChange;
};

export const useSignupHandler = () => {
  const { signupHandler } = useContext(AuthContext);
  return signupHandler;
};

export const useLoginHandler = () => {
  const { loginHandler } = useContext(AuthContext);
  return loginHandler;
};
