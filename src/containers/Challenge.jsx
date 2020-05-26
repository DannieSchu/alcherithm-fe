import React, { useState, useEffect } from 'react';
import Editor from '../components/Editors/Editor.jsx';
import Tester from '../components/QUnit/QUnit.jsx';
import ChallengeDisplay from '../components/ChallengeDisplay/ChallengeDisplay.jsx';
import { fetchChallengeById } from '../services/challengesAPI.js';
import { useParams } from 'react-router-dom';
import { post } from '../services/request.js';
import styles from './Challenge.css';

const Challenge = () => {
  const [runCode, setRunCode] = useState('');
  const [challenge, setChallenge] = useState(null);
  const [passed, setPassed] = useState(false);

  const { id } = useParams();

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
    });
  };

  if(!challenge)
    return <h1>loading</h1>;
  
  return (
    <section className={styles.Challenge}>
      <ChallengeDisplay {...challenge} {...challenge.resources} />
      <Editor code={challenge.starterCode} handleCodeChange={handleCodeChange} /><br></br>
      <Editor code={challenge.qunitTest} />
      <button onClick={onClick}>Run</button> 
      <button onClick={onSubmit}>Submit</button>
      <Tester tests={runCode} setPassed={setPassed} />
    </section>
  );
};

export default Challenge; 
