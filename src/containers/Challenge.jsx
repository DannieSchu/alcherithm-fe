import React, { useState, useEffect } from 'react';
import Editor from '../components/Editors/Editor.jsx';
import Tester from '../components/QUnit/QUnit.jsx';
import Button from '../components/Button/Button';
import ChallengeDisplay from '../components/ChallengeDisplay/ChallengeDisplay.jsx';
import { fetchChallengeById } from '../services/challengesAPI.js';
import { useParams, useHistory } from 'react-router-dom';
import { post } from '../services/request.js';

const Challenge = () => {
  const [runCode, setRunCode] = useState('');
  const [challenge, setChallenge] = useState(null);
  const [passed, setPassed] = useState(false);

  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    fetchChallengeById(id)
      .then(challenge => {
        setChallenge(challenge);
      });
  }, []);

  const onClick = () => {
    setRunCode(`${challenge.starterCode} \n \n ${challenge.qunitTest}`);
  };

  const handleCodeChange = (starterCode) => {
    setChallenge(challenge => ({ ...challenge, starterCode }));
  };

  const onSubmit = () => {
    post('/api/v1/solutions', {
      challengeId: id,
      passed,
      solution: challenge.starterCode
    })
      .then(solution => history.push(`/results/solution/${solution._id}`));
  };

  if(!challenge)
    return <h1>loading</h1>;

  return (
    <section>
      <ChallengeDisplay {...challenge} {...challenge.resources} />
      <Editor code={challenge.starterCode} handleCodeChange={handleCodeChange} /><br></br>
      <Editor code={challenge.qunitTest} />
      <Button buttonStyle="primary" backgroundColor="green" buttonSize="small" buttonText="Run" onClick={onClick} />
      <Button buttonStyle="primary" buttonSize="medium" backgroundColor="mainBlue" buttonText="Submit" onClick={onSubmit} />
      <Tester tests={runCode} setPassed={setPassed} />
    </section>
  );
};

export default Challenge; 
