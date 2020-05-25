import React, { useState } from 'react';
import YourSolution from '../../components/Results/YourSolution.jsx';


const Results = () => {
  const [yourSolution, setYourSolution] = useState();
  
  return (
    <>
      <YourSolution yourSolution={yourSolution} />
    </>
  );
};

export default Results;
