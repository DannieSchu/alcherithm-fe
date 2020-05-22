import React, { useState, useEffect } from 'react';
import Editor from '../components/Editors/Editor.jsx';
import Tester from '../components/QUnit/QUnit.jsx';
import ChallengeDisplay from '../components/ChallengeDisplay/ChallengeDisplay.jsx';
import { fetchChallengeById } from '../services/challengesAPI.js';
import { useParams } from 'react-router-dom';

const Challenge = () => {
  const [starterCode, setStarterCode] = useState('');
  const [qunitTest, setQunitTest] = useState('');
  const [runCode, setRunCode] = useState('');

  let { id } = useParams();

  useEffect(() => {
    fetchChallengeById(id)
      .then(challenge => {
        setStarterCode(challenge.starterCode);
        setQunitTest(challenge.qunitTest);
      });
  }, []);

  const onClick = () => {
    setRunCode(`${starterCode} \n \n ${qunitTest}`);
  }; 

  // add a new piece of state for the 'runableCode' for onClick (run)
  return (
    <section>
      <h2>Cool Challenege Stuff</h2>
      <ChallengeDisplay />
      <Editor code={starterCode} handleCodeChange={setStarterCode} />
      <Editor code={qunitTest} />
      <button onClick={onClick}>Run</button> 
      <Tester tests={runCode} />
    </section>
  );
};

export default Challenge; 
