import { get } from './request';

export const fetchChallenges = userId => get(`/api/v1/challenges?userId=${userId}`);

export const fetchChallengeById = challengeId => get(`/api/v1/challenges/${challengeId}`);
