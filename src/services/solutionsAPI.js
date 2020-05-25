import { get } from './request';

export const fetchUserSolutionsToChallenge = (challengeId, userId) => get(`/api/v1/solutions?challengeId=${challengeId}&userId=${userId}`);

export const fetchUserSolutions = userId => get(`/api/v1/solutions?userId=${userId}`);

export const fetchChallengesWithSolutions = challengeId => get(`/api/v1/solutions?challengeId=${challengeId}`);
