import React from 'react';
import ChallengeItem from '../ChallengeItem/ChallengeItem';
import Dropdown from '../Dropdown/Dropdown';
import { useGetChallenges } from '../../hooks/getChallenges';
import { fetchChallenges } from '../../services/challengesAPI';
import { useGetCombinedLoading } from '../../hooks/getLoading';
import { Link } from 'react-router-dom';
import styles from './ChallengeList.css';

const ChallengeList = () => {
  const { selectedChallenges, category, setCategory, loading } = useGetChallenges(fetchChallenges);

  const codeElements = selectedChallenges.map(challenge => (
    <li key={challenge._id}>
      <Link to={`/challenges/${challenge._id}`}>
        <ChallengeItem {...challenge} char={100} />
      </Link>
    </li>
  ));

  return (
    <section className={styles.ChallengeList}>
      <Dropdown setCategory={setCategory} category={category} />
      {useGetCombinedLoading(loading)}
      <ul>
        {codeElements}
      </ul>
    </section>
  );
};

export default ChallengeList;
