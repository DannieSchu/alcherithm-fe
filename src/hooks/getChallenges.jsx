import { useState, useEffect } from 'react';
import { useCurrentUser } from './AuthProvider';

export const useGetChallenges = fetchFunction => {
  const [challenges, setChallenges] = useState([]);
  const [selectedChallenges, setSelectedChallenges] = useState([]);
  const [category, setCategory] = useState('allCategories');
  const [loading, setLoading] = useState(false);
  const user = useCurrentUser();

  useEffect(() => {
    setLoading(true);
    fetchFunction(user._id)
      .then(fetchedChallenges => {
        setChallenges(fetchedChallenges);
        setSelectedChallenges(fetchedChallenges);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    setSelectedChallenges(category === 'allCategories' ? challenges : challenges.filter(challenge => challenge.category === category));
  }, [category]);

  return { selectedChallenges, category, setCategory, loading, user };
};
