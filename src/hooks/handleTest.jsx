import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useFetchPassedFailed } from './AuthProvider';
import { fetchChallengeById } from '../services/challengesAPI';
import { createSolution } from '../services/solutionsAPI';

export const useHandleTest = () => {
  const [runCode, setRunCode] = useState('');
  const [challenge, setChallenge] = useState(null);
  const [passed, setPassed] = useState(false);

  const { id } = useParams();
  const history = useHistory();
  const fetchPassedFailed = useFetchPassedFailed();

  useEffect(() => {
    fetchChallengeById(id)
      .then(challenge => {
        setChallenge(challenge);
      });
  }, []);

  const handleRun = () => {
    setRunCode(`${challenge.starterCode} \n \n ${challenge.qunitTest}`);
  };

  const handleCodeChange = (starterCode) => {
    setChallenge(challenge => ({ ...challenge, starterCode }));
  };

  const handleSubmit = () => {
    createSolution(id, passed, challenge)
      .then(solution => history.push(`/results/solution/${solution._id}`))
      .then(() => fetchPassedFailed());
  };

  return { challenge, runCode, setPassed, handleRun, handleCodeChange, handleSubmit };
};
