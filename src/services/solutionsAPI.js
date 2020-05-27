import { get } from './request';

export const fetchUserSolutionsToChallenge = (challengeId, userId) => get(`/api/v1/solutions?challengeId=${challengeId}&userId=${userId}`);

export const fetchAllSolutionsToChallenge = challengeId => get(`/api/v1/solutions?challengeId=${challengeId}`);

export const fetchResults = solutionId => get(`/api/v1/solutions/results/${solutionId}`);

export const fetchUserChallengesWithSolutions = userId => get(`/api/v1/solutions?userId=${userId}`);

