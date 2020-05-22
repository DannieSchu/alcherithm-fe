export const fetchChallenges = () => {
  return fetch(`${process.env.REACT_APP_API_URL_KEY}/api/v1/challenges`)
    .then(res => res.json());
};

// export const fetchChallenges = () => {
//   return fetch(`${process.env.API_URL}/api/v1/challenges`)
//     .then(res => res.json())
//     .then(res => res.map(json => ({
//       _id: json._id,
//       category: json.category,
//       challengeNumber: json.challengeNumber,
//       instructions: json.instructions,
//       starterCode: json.starterCode,
//       qunitTest: json.qunitTest,
//       resources: json.resources
//     })));
// };
