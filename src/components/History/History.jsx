import React from 'react';
import CodeChallenge from '../CodeChallenges/CodeChallenge';
import Dropdown from '../Dropdown/Dropdown';
import PopUp from '../PopUp/PopUp';
import Button from '../Button/Button';
import { fetchUserChallengesWithSolutions } from '../../services/solutionsAPI';
import { useGetChallenges } from '../../hooks/getChallenges';
import { useGetCombinedLoading } from '../../hooks/getLoading';
import { useToggleSolutions } from '../../hooks/toggleSolutions';
import styles from '../CodeChallenges/CodeChallenges.css';
import history from '../History/History.css';

const History = () => {
  const { selectedChallenges, setCategory, loading } = useGetChallenges(fetchUserChallengesWithSolutions);
  const { visible, selectedSolutions, togglePopUp, handleClick } = useToggleSolutions();
  useGetCombinedLoading(loading);
  
  const codeElements = selectedChallenges.map((challenge) => (
    <li key={challenge._id}>
      <CodeChallenge {...challenge} char={300} />
      <Button buttonStyle="primary" backgroundColor="green" buttonSize="medium" buttonText="Your Solutions" onClick={() => handleClick(challenge.solutions)} />
    </li>
  ));

  return (
    <section className={styles.CodeChallenges}>
      <article>
        <h1>History of Completed Challenges</h1>
        <div className={history.Styles}><Dropdown setCategory={setCategory} /></div>
        {/* {useGetCombinedLoading(loading)} */}
        {visible && <PopUp toggle={togglePopUp} solutions={selectedSolutions} />}
        <ul className={styles.column}>
          {codeElements}
        </ul>
      </article>
    </section>
  );
};

export default History;
