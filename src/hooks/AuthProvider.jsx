import React, { createContext, useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { postSignup, postLogin, getLogout, getVerify } from '../services/authAPI';
import { useHistory } from 'react-router-dom';
import { getUserPassFailAttempted } from '../services/userAPI';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [passed, setPassed] = useState(null);
  const [failed, setFailed] = useState(null);
  const [attempted, setAttempted] = useState(null);
  const [total, setTotal] = useState(null);
  const [passingSolutionsByCategory, setPassingSolutionsByCategory] = useState([]);
  
  const history = useHistory();

  const fetchPassedFailed = () => {
    return getUserPassFailAttempted(user._id)
      .then(({ passed, failed, attempted, totalNumberOfChallenges, passingSolutionsByCategory }) => {
        setPassed(passed);
        setFailed(failed);
        setAttempted(attempted);
        setTotal(totalNumberOfChallenges);
        setPassingSolutionsByCategory(passingSolutionsByCategory);
      });
  };

  useEffect(() => {
    getVerify()
      .then(user => setUser(user))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    if(!user) return;
    fetchPassedFailed();
  }, [user]);

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
    setTotal(null);
    return getLogout(user)
      .then(history.push('/login'));
  };

  return (
    <AuthContext.Provider value={{ user, signup, login, logout, error, loading, passed, failed, attempted, total, passingSolutionsByCategory, fetchPassedFailed }}>
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

export const useUserPassed = () => {
  const { passed } = useContext(AuthContext);
  return passed;
};

export const useUserFailed = () => {
  const { failed } = useContext(AuthContext);
  return failed;
};

export const useUserAttempted = () => {
  const { attempted } = useContext(AuthContext);
  return attempted;
};

export const useUserTotal = () => {
  const { total } = useContext(AuthContext);
  return total;
};

export const usePassingSolutionsByCategory = () => {
  const { passingSolutionsByCategory } = useContext(AuthContext);
  return passingSolutionsByCategory;
};

export const useFetchPassedFailed = () => {
  const { fetchPassedFailed } = useContext(AuthContext);
  return fetchPassedFailed;
};
