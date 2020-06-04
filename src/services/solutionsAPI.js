import { get, post } from './request';

export const createSolution = (id, passed, challenge) => post('/api/v1/solutions', {
  challengeId: id,
  passed,
  solution: challenge.starterCode
});

export const fetchUserSolutionsToChallenge = (challengeId, userId) => get(`/api/v1/solutions?challengeId=${challengeId}&userId=${userId}`);

export const fetchAllSolutionsToChallenge = challengeId => get(`/api/v1/solutions?challengeId=${challengeId}`);

export const fetchUserChallengesWithSolutions = userId => get(`/api/v1/solutions?userId=${userId}`);

export const fetchResults = solutionId => get(`/api/v1/solutions/results/${solutionId}`);
