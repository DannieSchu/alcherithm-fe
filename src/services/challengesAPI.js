export const fetchChallenges = () => {
  return fetch('http://alcherithm-staging.herkouapp.com')
    .then(res => res.json())
    .then(res => res.results.map(json => ({
      id: json.id,
      category: json.category,
      challengeNumber: json.challengeNumber,
      instructions: json.instructions,
      starterCode: json.starterCode,
      qunitTest: json.qunitTest,
      resources: json.resources
    })));
};
