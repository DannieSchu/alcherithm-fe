import React from 'react';
import CodeChallenge from './CodeChallenge';
import Dropdown from '../Dropdown/Dropdown';
import { useGetChallenges } from '../../hooks/getChallenges';
import { fetchChallenges } from '../../services/challengesAPI';
import { Link } from 'react-router-dom';
import styles from './CodeChallenges.css';

const CodeChallenges = () => {
  const { selectedChallenges, setCategory, loading } = useGetChallenges(fetchChallenges);

  const codeElements = selectedChallenges.map(challenge => (
    <li key={challenge._id}>
      <Link to={`/challenges/${challenge._id}`}>
        <CodeChallenge {...challenge} />
      </Link>
    </li>
  ));

  return (
    <section className={styles.CodeChallenges}>
      <Dropdown setCategory={setCategory} />
      {loading && <h3>Loading</h3>}
      <ul>
        {codeElements}
      </ul>
    </section>
  );
};

export default CodeChallenges;
