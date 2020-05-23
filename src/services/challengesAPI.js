export const fetchChallenges = () => {
  return fetch('https://alcherithm-staging.herokuapp.com/api/v1/challenges')
    .then(res => res.json());
};

export const fetchChallengeById = (id) => {
  return fetch(`${process.env.REACT_APP_API_URL_KEY}/api/v1/challenges/${id}`)
    .then(res => res.json());
};
