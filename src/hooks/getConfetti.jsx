import { useState, useEffect } from 'react';

export const useGetConfetti = () => {
  const [confetti, setConfetti] = useState(true);

  useEffect(() => {
    const id = setTimeout(() => {
      setConfetti(false);
    }, 9000);
    return () => {
      clearTimeout(id);
    };
  }, []);

  return confetti;
};
