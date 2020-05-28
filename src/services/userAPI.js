import { get } from './request';

export const getUserPassFailAttempted = (id) => get(`/api/v1/users/${id}/counts`);
