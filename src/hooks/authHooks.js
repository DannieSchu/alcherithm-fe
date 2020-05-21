import { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getAuthError, getAuthLoading, getAuthUser } from '../selectors/authSelectors';
// import { signup, login, verify } from '../actions/authActions';
import { useHistory } from 'react-router-dom';

export const useSignupAndLogin = () => {
  // const dispatch = useDispatch();
  // const error = useSelector(getAuthError);
  // const loading = useSelector(getAuthLoading);
  const user = useCurrentUser();

  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  useEffect(()=> {
    if(user) history.push('/challenges');
  }, [user]);

  const handleChange = ({ target }) => {
    if(target.name === 'email') setEmail(target.value);
    if(target.name === 'password') setPassword(target.value);
  };

  const togglePasswordType = () => setShowPassword(prevShowPassword => !prevShowPassword);

  const signupHandler = () => {
    // dispatch an action
    // take our email and password and post to the signup route
    dispatch(signup(email, password));
  };

  const loginHandler = () => {
    // dispatch an action
    // take our email and password and pont to the login route
    dispatch(login(email, password));
  };

  return {
    error,
    loading,
    email,
    password,
    passwordType: showPassword ? 'text' : 'password',
    togglePasswordType,
    handleChange,
    signupHandler,
    loginHandler
  };
};

export const useCurrentUser = () => {
  // const dispatch = useDispatch();
  // const user = useSelector(getAuthUser);

  useEffect(() => {
    if(!user){
      // go and find a user /api/v1/auth/verify
      dispatch(verify());
    }
  }, [user]);

  return user;
};
