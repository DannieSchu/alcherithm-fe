import { get } from './request';

export const getUserPassFail = (id) => get(`/api/v1/users/${id}/counts`);
