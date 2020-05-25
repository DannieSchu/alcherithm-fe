import { get } from './request';

export const fetchChallenges = () => get('/api/v1/challenges');

export const fetchChallengeById = challengeId => get(`/api/v1/challenges/${challengeId}`);
