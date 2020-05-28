import React from 'react';
import CodeChallenge from '../CodeChallenges/CodeChallenge';
import Dropdown from '../Dropdown/Dropdown';
import PopUp from '../PopUp/PopUp';
import Button from '../Button/Button';
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
      <CodeChallenge {...challenge} char={300} />
      <Button buttonStyle="primary" buttonSize="large" buttonText="Your Solutions" onClick={() => handleClick(challenge.solutions)} />
    </li>
  ));

  if (loading) return (
    <section>
      <h2>loading...</h2>
    </section>
  );

  return (
    <section className={styles.CodeChallenges}>
      <article>
        <h1>Completed Challenges</h1>
        <Dropdown setCategory={setCategory} />
        {visible && <PopUp toggle={togglePopUp} solutions={selectedSolutions} />}
        <ul className={styles.column}>
          {codeElements}
        </ul>
      </article>
    </section>
  );
};

export default History;
