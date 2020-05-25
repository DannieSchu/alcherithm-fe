import { useState, useEffect } from 'react';
import { fetchChallenges } from '../services/challengesAPI';

export const useGetChallenges = () => {
  const [challenges, setChallenges] = useState([]);
  const [selectedChallenges, setSelectedChallenges] = useState([]);
  const [category, setCategory] = useState('allCategories');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchChallenges()
      .then(fetchedChallenges => {
        setChallenges(fetchedChallenges);
        setSelectedChallenges(fetchedChallenges);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    setSelectedChallenges(category === 'allCategories' ? challenges : challenges.filter(challenge => challenge.category === category));
  }, [category]);

  return { selectedChallenges, category, setCategory, loading };
};
