import React from 'react';
import styles from './Results.css';
import { useGetSolutions } from '../../hooks/getSolutions';
import { Link } from 'react-router-dom';
import Editor from '../Editors/Editor';
import { useCurrentUser } from '../../hooks/AuthProvider';

const Results = () => {
  const { userSolutions, sampleSolution } = useGetSolutions();
  const user = useCurrentUser();

  const solutionElements = userSolutions.map(userSolution => (
    <li key={userSolution._id}>
      <Editor code={userSolution.solution} readOnly={true} />
      {userSolution.updatedAt}
    </li>
  ));

  return (
    <main className={styles.Results}>
      <section className={styles.userName}>
        <h3>Nice Work, {user.firstName}!</h3>
      </section>
      <section className={styles.editors}>
        <ul>
          {solutionElements} 
        </ul>
      </section>
      <section className={styles.editors}>
        <Editor code={sampleSolution} readOnly={true} />
      </section>
      <Link to="/challenges">
        <button>New Challenge</button>
      </Link>

      <Link to="/history">
        <button>History</button>
      </Link>
    </main>
  );
};

export default Results;
