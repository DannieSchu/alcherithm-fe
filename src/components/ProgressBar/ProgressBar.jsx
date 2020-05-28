import React from 'react';
import { useUserAttempted, useUserTotal } from '../../hooks/AuthProvider';
import styles from './ProgressBar.css';

const ProgressBar = () => {
  const attempted = useUserAttempted();
  const total = useUserTotal();

  return (
    <div className={styles.ProgressBar}>
      Total number of completed challenges
      <progress max={total} value={attempted}></progress>
    </div>
  );
};

export default ProgressBar;

