import React from 'react';
import styles from './Results.css';
import { useGetSolutions } from '../../hooks/getSolutions';
import { Link } from 'react-router-dom';
import Editor from '../Editors/Editor';
import { useCurrentUser } from '../../hooks/AuthProvider';
import Button from '../Button/Button';

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
      <section className={styles.displayName}>
        <h3>Nice Work, {user.firstName}!</h3>
      </section>
      <section className={styles.editors}>
        <section>
          <ul>
            {solutionElements} 
          </ul>
        </section>
        <section>
          <Editor code={sampleSolution} readOnly={true} />
        </section>
        <Link to="/challenges">
          <Button buttonStyle="primary" buttonSize="small" backgroundColor="green" buttonText="New Challenge" />
        </Link>
        <Link to="/history">
          <Button buttonStyle="primary" buttonSize="small" backgroundColor="mainBlue" buttonText="History" />
        </Link>
      </section>
    </main>
  );
};

export default Results;
