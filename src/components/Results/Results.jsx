import React from 'react';
// import styles from './Results.css';
import { useGetSolutions } from '../../hooks/getSolutions';
import { Link } from 'react-router-dom';
// import { Button } from 'semantic-ui-react';
import Editor from '../Editors/Editor';
import Button from '../Button/Button';

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
        <Button buttonStyle="primary" buttonSize="small" backgroundColor="green" buttonText="New Challenge" />
      </Link>
      <Link to="/history">
        <Button buttonStyle="primary" buttonSize="small" backgroundColor="mainBlue" buttonText="History" />
      </Link>
    </main>
  );
};
export default Results;
