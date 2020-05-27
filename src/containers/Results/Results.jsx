import React from 'react';
import styles from './Results.css';
import { useGetSolutions } from '../../hooks/getSolutions';


const Results = () => {
  const { userSolutions, sampleSolution } = useGetSolutions();

  const solutionElements = userSolutions.map(userSolution => (
    <li key={userSolution._id}>
      {userSolution.solution}
      {/* {userSolution.passed} */}
      {userSolution.updatedAt}
    </li>
  ));

  return (
    <main className={styles.Results}>
      <section>
        {solutionElements}
      </section>
      <div>
        {sampleSolution }
      </div>
    </main>
  );
};

export default Results;
