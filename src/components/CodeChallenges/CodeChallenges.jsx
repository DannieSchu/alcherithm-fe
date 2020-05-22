import React from 'react';
import CodeChallenge from './CodeChallenge';
import { useGetChallenges } from '../../hooks/getChallenges';

const CodeChallenges = () => {
  const challenges = useGetChallenges();
  const codeElements = challenges.map(challenge => (
    <>
      <li key={challenge._id}>
        <CodeChallenge {...challenge} />
      </li>
    </>
  ));

  return (
    <ul>
      {codeElements}
    </ul>
  );
};

export default CodeChallenges;
