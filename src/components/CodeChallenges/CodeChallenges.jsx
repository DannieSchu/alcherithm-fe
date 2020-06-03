import React from 'react';
import CodeChallenge from './CodeChallenge';
import Dropdown from '../Dropdown/Dropdown';
import { useGetChallenges } from '../../hooks/getChallenges';
import { fetchChallenges } from '../../services/challengesAPI';
import { useGetCombinedLoading } from '../../hooks/getLoading';
import { Link } from 'react-router-dom';
import styles from './CodeChallenges.css';

const CodeChallenges = () => {
  const { selectedChallenges, category, setCategory, loading } = useGetChallenges(fetchChallenges);

  const codeElements = selectedChallenges.map(challenge => (
    <li key={challenge._id}>
      <Link to={`/challenges/${challenge._id}`}>
        <CodeChallenge {...challenge} char={100} />
      </Link>
    </li>
  ));

  return (
    <section className={styles.CodeChallenges}>
      <Dropdown setCategory={setCategory} category={category} />
      {useGetCombinedLoading(loading)}
      <ul className={styles.row}>
        {codeElements}
      </ul>
    </section>
  );
};

export default CodeChallenges;
