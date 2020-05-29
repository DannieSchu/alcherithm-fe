import React, { useState, useEffect } from 'react';
import Editor from '../components/Editors/Editor.jsx';
import Tester from '../components/QUnit/QUnit.jsx';
import Button from '../components/Button/Button';
import ChallengeDisplay from '../components/ChallengeDisplay/ChallengeDisplay.jsx';
import { fetchChallengeById } from '../services/challengesAPI.js';
import { useParams, useHistory } from 'react-router-dom';
import { post } from '../services/request.js';
import styles from './Challenge.css';
import { useFetchPassedFailed } from '../hooks/AuthProvider.jsx';
import tabStyle from '../styles/tabs.css';

const Challenge = () => {
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
      .then(solution => history.push(`/results/solution/${solution._id}`))
      .then(() => fetchPassedFailed());
  };

  if(!challenge)
    return <h1>loading</h1>;

  return (
    <section className={styles.Challenge}>
      <section className={styles.overview}>
        <ChallengeDisplay {...challenge} {...challenge.resources} />
        <section className={styles.testResults}>
          <article>
            <div>
              <h3>Test Results</h3>
              <Tester className={styles.testResults} tests={runCode} setPassed={setPassed} />
            </div>
            <Button buttonStyle="primary" buttonSize="medium" backgroundColor="green" buttonText="Submit" onClick={onSubmit} />
          </article>
        </section>
      </section>
      <section className={styles.solution}>
        <section className={tabStyle.tabs}>
          <input type="radio" id="solution" />
          <label htmlFor="solution" className={tabStyle.active}>Challenge</label>
        </section>
        <section className={styles.content}>
          <h3>Starter Code</h3>
          <Editor code={challenge.starterCode} handleCodeChange={handleCodeChange} />
          <article>
            <h3>Test</h3>
            <Button buttonStyle="primary" backgroundColor="mainBlue" buttonSize="small" buttonText="Run" onClick={onClick} />
          </article>
          <Editor code={challenge.qunitTest} />
        </section>
      </section>
    </section>
  );
};

export default Challenge; 
