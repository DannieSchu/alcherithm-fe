import React from 'react';
// import styles from './Results.css';
import { useGetSolutions } from '../../hooks/getSolutions';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';


const Results = () => {
  const { userSolutions, sampleSolution } = useGetSolutions();

  const solutionElements = userSolutions.map(userSolution => (
    <li key={userSolution._id}>
      {userSolution.solution}
      {userSolution.updatedAt}
    </li>
  ));

  return (
    <main>
      <section>
        <ul>{solutionElements}</ul>
      </section>
      <section>
        {sampleSolution}
      </section>
      <Link to="/challenges">
        <Button>
          <button>New Challenge</button>
        </Button>
      </Link>

      <Link to="/history">
        <Button>
          <button>History</button>
        </Button>
      </Link>
    </main>
  );
};

export default Results;
