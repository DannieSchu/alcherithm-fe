import { useState, useEffect } from 'react';
import { fetchResults } from '../services/solutionsAPI';
import { useParams } from 'react-router-dom';

export const useGetSolutions = () => {
  //get all solutions by challengeId and userId state
  const [userSolutions, setUserSolutions] = useState([]);
  //get a single solution for this challenge from database.
  const [sampleSolution, setSampleSolution] = useState('');

  const { id } = useParams(id);

  useEffect(() => {
  // grab our service call to fetch challenges with solutions. 
  //update this service call. 
    fetchResults(id)
      .then(({ userSolutions, suggestedSolution }) => {
        setUserSolutions(userSolutions);
        setSampleSolution(suggestedSolution.solution);
      });
  }, []);

  return { userSolutions, sampleSolution };
};
