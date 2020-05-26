import React from 'react';
import CodeChallenge from '../CodeChallenges/CodeChallenge';
import Dropdown from '../Dropdown/Dropdown';
import PopUp from '../PopUp/PopUp';
import { useGetChallenges } from '../../hooks/getChallenges';
import { useLoading } from '../../hooks/AuthProvider';
import { fetchUserChallengesWithSolutions } from '../../services/solutionsAPI';
import { useToggleSolutions } from '../../hooks/toggleSolutions';
import styles from '../CodeChallenges/CodeChallenges.css';

const History = () => {
  const loading = useLoading();
  const { selectedChallenges, setCategory } = useGetChallenges(fetchUserChallengesWithSolutions);
  const { visible, selectedSolutions, togglePopUp, handleClick } = useToggleSolutions();

  const codeElements = selectedChallenges.map((challenge) => (
    <li key={challenge._id}>
      <CodeChallenge {...challenge} />
      <button onClick={() => handleClick(challenge.solutions)}>Your Solutions</button>
    </li>
  ));
  
  if(loading) return (
    <section>
      <h2>loading...</h2>
    </section>
  );

  return (
    <section className={styles.CodeChallenges}>
      <Dropdown setCategory={setCategory} />
      {visible && <PopUp toggle={togglePopUp} solutions={selectedSolutions} />}
      <ul>
        {codeElements}
      </ul>
    </section>
  );
};

export default History;
