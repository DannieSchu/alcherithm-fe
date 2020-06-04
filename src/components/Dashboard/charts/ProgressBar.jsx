import React from 'react';
import { useUserTotal, useUserPassed } from '../../../hooks/AuthProvider';
import styles from './ProgressBar.css';

const ProgressBar = () => {
  const total = useUserTotal();
  const passed = useUserPassed();

  return (
    <div className={styles.ProgressBar}>
      <progress max={total} value={passed}></progress>
      {passed} of {total} challenges passed
    </div>
  );
};

export default ProgressBar;
