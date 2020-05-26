import React, { useState } from 'react';
import CodeChallenge from '../CodeChallenges/CodeChallenge';
import Dropdown from '../Dropdown/Dropdown';
import PopUp from '../PopUp/PopUp';
import { useGetChallenges } from '../../hooks/getChallenges';
import { useLoading } from '../../hooks/AuthProvider';
import { fetchUserChallengesWithSolutions } from '../../services/solutionsAPI';
import styles from '../CodeChallenges/CodeChallenges.css';

const History = () => {
  const loading = useLoading();
  const { selectedChallenges, setCategory } = useGetChallenges(fetchUserChallengesWithSolutions);
  const [selectedSolutions, setSelectedSolutions] = useState([]);
  const [visible, setVisibility] = useState(false);

  const togglePopUp = () => {
    setVisibility(!visible);
  };

  const handleClick = solutions => {
    setSelectedSolutions(solutions.map(solution => solution.solution));
    togglePopUp();
  };

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
