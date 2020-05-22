import React, { useState, useEffect } from 'react';
import Editor from '../components/Editors/Editor.jsx';
import Tester from '../components/QUnit/QUnit.jsx';
import ChallengeDisplay from '../components/ChallengeDisplay/ChallengeDisplay.jsx';
import { fetchChallengeById } from '../services/challengesAPI.js';
import { useParams } from 'react-router-dom';

const Challenge = () => {
  const [starterCode, setStarterCode] = useState('');
  const [qunitTest, setQunitTest] = useState('');
  
  let { id } = useParams();

  useEffect(() => {
    fetchChallengeById(id)
      .then(json => setStarterCode(json))
      .then(json => setQunitTest(json));
  }, []);

  return (
    <section>
      <h2>Cool Challenege Stuff</h2>
      <ChallengeDisplay />
      <Editor code={starterCode} handleCodeChange={setStarterCode} />
      <Editor code={qunitTest} />
      <Tester tests={`${starterCode} \n \n ${qunitTest}`} />
    </section>
  );
};

export default Challenge; 
