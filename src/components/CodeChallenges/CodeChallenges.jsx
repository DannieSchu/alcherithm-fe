import React from 'react';
import CodeChallenge from './CodeChallenge';
import Dropdown from '../Dropdown/Dropdown';
import { useGetChallenges } from '../../hooks/getChallenges';
import { Link } from 'react-router-dom';
import styles from './CodeChallenges.css';

const CodeChallenges = () => {
  const { selectedChallenges, category, setCategory } = useGetChallenges(category);

  const codeElements = selectedChallenges.map(challenge => (
    <li key={challenge._id}>
      <Link to={`/challenges/${challenge._id}`}>
        <CodeChallenge {...challenge} />
      </Link>
    </li>
  ));

  return (
    <>
      <Dropdown setCategory={setCategory} />
      <ul className={styles.CodeChallenges}>
        {codeElements}
      </ul>
    </>
  );
};

export default CodeChallenges;
