import React from 'react';
import CodeChallenge from './CodeChallenge.jsx';
import { useChallenge } from '../../hooks/ChallengeProvider.jsx';
const CodeChallenges = () => {
  const codeChallenges = useChallenge();
  const codeElements = codeChallenges.map(codeChallenge => (
    <>
      <li key={codeChallenge._id}>
        <CodeChallenge {...codeChallenge} />
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
