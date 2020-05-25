import { useState, useEffect } from 'react';
import { fetchChallengesWithSolutions } from '../services/challengesAPI';
import { useParams } from 'react-router-dom';

export const useGetSolutions = () => {
  //get current solution state
  const [userSolution, setUserSolution] = useState('');
  //get a solution for this challenge from database.
  const [sampleSolution, setSampleSolution] = useState('');

  const { challengeId } = useParams;

  useEffect(() => {
  // grab our service call to fetch challenges with solutions. 
    fetchChallengesWithSolutions(challengeId)
      .then(fetchedSolutions => {
        setSampleSolution(fetchedSolutions.solution);
      });
  }, []);
};
