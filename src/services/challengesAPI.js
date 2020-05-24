export const fetchChallenges = () => {
  return fetch(`${process.env.REACT_APP_API_URL}/api/v1/challenges`)
    .then(res => res.json());
};

export const fetchChallengeById = id => {
  return fetch(`${process.env.REACT_APP_API_URL}/api/v1/challenges/${id}`)
    .then(res => res.json());
};
