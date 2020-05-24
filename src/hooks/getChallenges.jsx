import { useState, useEffect } from 'react';
import { fetchChallenges } from '../services/challengesAPI';

export const useGetChallenges = () => {
  const [challenges, setChallenges] = useState([]);
  const [selectedChallenges, setSelectedChallenges] = useState([]);
  const [category, setCategory] = useState('allCategories');

  useEffect(() => {
    fetchChallenges()
      .then(fetchedChallenges => {
        setChallenges(fetchedChallenges);
        setSelectedChallenges(fetchedChallenges);
      });
  }, []);

  useEffect(() => {
    setSelectedChallenges(category === 'allCategories' ? challenges : challenges.filter(challenge => challenge.category === category));
  }, [category]);

  return { challenges, selectedChallenges, category, setCategory };
};
