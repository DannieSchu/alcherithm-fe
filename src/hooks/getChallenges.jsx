import { useState, useEffect } from 'react';
import { fetchChallenges } from '../services/challengesAPI';

export const useGetChallenges = () => {
  const [challenges, setChallenges] = useState([]);

  useEffect(() => {
    fetchChallenges()
      .then(fetchedChallenges => setChallenges(fetchedChallenges));
  }, []);
  return challenges;
};
