import React from 'react';
// import styles from './Results.css';
import { useGetSolutions } from '../../hooks/getSolutions';
import { Link } from 'react-router-dom';
import Editor from '../Editors/Editor';

const Results = () => {
  const { userSolutions, sampleSolution } = useGetSolutions();

  const solutionElements = userSolutions.map(userSolution => (
    <li key={userSolution._id}>
      <Editor code={userSolution.solution} readOnly={true} />
      {userSolution.updatedAt}
    </li>
  ));

  return (
    <main>
      <section>
        <ul>
          {solutionElements} 
        </ul>
      </section>
      <section>
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
