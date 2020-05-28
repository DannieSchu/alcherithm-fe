import { get } from './request';
// import { useCurrentUser } from '../hooks/AuthProvider';

// const user = useCurrentUser();
// console.log(user);
export const getUserPassFailAttempted = (id) => get(`/api/v1/users/${id}/counts`);
