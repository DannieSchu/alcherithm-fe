import { useState, useEffect } from 'react';
import { fetchResults } from '../services/solutionsAPI';
import { useParams } from 'react-router-dom';

export const useGetSolutions = () => {
  const [userSolutions, setUserSolutions] = useState([]);
  const [sampleSolution, setSampleSolution] = useState('');

  const { id } = useParams(id);

  useEffect(() => {
    fetchResults(id)
      .then(({ userSolutions, suggestedSolution }) => {
        setUserSolutions(userSolutions);
        setSampleSolution(suggestedSolution.solution);
      });
  }, []);

  return { userSolutions, sampleSolution };
};
