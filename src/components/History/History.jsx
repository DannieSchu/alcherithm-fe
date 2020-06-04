import React from 'react';
import ChallengeItem from '../ChallengeItem/ChallengeItem';
import Dropdown from '../Dropdown/Dropdown';
import PopUp from './PopUp';
import Button from '../Button/Button';
import { fetchUserChallengesWithSolutions } from '../../services/solutionsAPI';
import { useGetChallenges } from '../../hooks/getChallenges';
import { useGetCombinedLoading } from '../../hooks/getLoading';
import { useToggleSolutions } from '../../hooks/toggleSolutions';
import listStyles from '../ChallengeList/ChallengeList.css';
import styles from './History.css';

const History = () => {
  const { selectedChallenges, setCategory, loading } = useGetChallenges(fetchUserChallengesWithSolutions);
  const { visible, selectedSolutions, togglePopUp, handleClick } = useToggleSolutions();
  useGetCombinedLoading(loading);

  const codeElements = selectedChallenges.map((challenge) => (
    <li key={challenge._id}>
      <ChallengeItem {...challenge} char={300} />
      <Button buttonStyle="primary" backgroundColor="green" buttonSize="medium" onClick={() => handleClick(challenge.solutions)}>Your Solutions</Button>
    </li>
  ));

  return (
    <section className={listStyles.ChallengeList}>
      <article>
        <h1>History of Completed Challenges</h1>
        <div className={styles.dropdown}>
          <Dropdown setCategory={setCategory} />
        </div>
        {useGetCombinedLoading(loading)}
        <ul className={styles.History}>
          {codeElements}
        </ul>
        {visible && <PopUp toggle={togglePopUp} solutions={selectedSolutions} />}
      </article>
    </section>
  );
};

export default History;
