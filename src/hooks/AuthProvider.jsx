import React, { createContext, useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { postSignup, postLogin, getLogout, getVerify } from '../services/authAPI';
import { useHistory } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  
  const history = useHistory();

  useEffect(() => {
    getVerify()
      .then(user => setUser(user))
      .finally(() => setLoading(false));
  }, []);

  const signup = (email, password, firstName, lastName, cohort, avatar) => {
    setLoading(true);
    setError(null);
    return postSignup(email, password, firstName, lastName, cohort, avatar)
      .then(user => setUser(user))
      .catch(error => setError(error))
      .finally(() => setLoading(false));
  };

  const login = (email, password) => {
    setLoading(true);
    setError(null);
    return postLogin(email, password)
      .then(user => setUser(user))
      .catch(error => setError(error))
      .finally(() => setLoading(false));
  };

  const logout = (user) => {
    setUser(null);
    return getLogout(user)
      .then(history.push('/login'));
  };

  return (
    <AuthContext.Provider value={{ user, signup, login, logout, error, loading }}>
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
  const { user } = useContext(AuthContext);
  return user;
};

export const useLogout = () => {
  const { logout } = useContext(AuthContext);
  return logout;
};

export const useError = () => {
  const { error } = useContext(AuthContext);
  return error;
};

export const useLoading = () => {
  const { loading } = useContext(AuthContext);
  return loading;
};
