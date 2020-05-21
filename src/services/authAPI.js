import { post, get } from './request';

export const postSignup = (email, password) => post('/api/v1/auth/signup', { email, password });
export const postLogin = (email, password) => post('/api/v1/auth/login', { email, password });
export const getLogout = () => get('/api/v1/auth/logout');
export const getVerify = () => get('/api/v1/auth/verify');
