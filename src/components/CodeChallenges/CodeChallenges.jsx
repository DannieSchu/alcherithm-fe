import React from 'react';
import CodeChallenge from './CodeChallenge';
import { useGetChallenges } from '../../hooks/getChallenges';
import { Link } from 'react-router-dom';
import styles from './CodeChallenges.css';

const CodeChallenges = () => {
  const challenges = useGetChallenges();
  const codeElements = challenges.map(challenge => (
    <>
      <li key={challenge._id}>
        <Link to={`/challenges/${challenge._id}`}>
          <CodeChallenge {...challenge} />
        </Link>
      </li>
    </>
  ));

  return (
    <ul className={styles.CodeChallenges}>
      {codeElements}
    </ul>
  );
};

export default CodeChallenges;
