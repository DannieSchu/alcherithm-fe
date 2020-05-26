import { useState } from 'react';

export const useToggleSolutions = () => {
  const [selectedSolutions, setSelectedSolutions] = useState([]);
  const [visible, setVisibility] = useState(false);

  const togglePopUp = () => {
    setVisibility(!visible);
  };

  const handleClick = solutions => {
    setSelectedSolutions(solutions.map(solution => solution.solution));
    togglePopUp();
  };

  return { visible, selectedSolutions, togglePopUp, handleClick };
};
