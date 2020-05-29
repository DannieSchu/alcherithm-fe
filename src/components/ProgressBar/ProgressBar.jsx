import React from 'react';
import { useUserTotal, useUserPassed } from '../../hooks/AuthProvider';
import styles from './ProgressBar.css';

const ProgressBar = () => {
  // const attempted = useUserAttempted();
  const total = useUserTotal();
  const passed = useUserPassed();

  // return (
  //   <div className={styles.ProgressBar}>
  //     <progress max={total} value={attempted}></progress>
  //     Total number of completed challenges
  //   </div>
  // );

  return (
    <div className={styles.ProgressBar}>
      <progress max={total} value={passed}></progress>
      {passed} of {total} challenges passed
    </div>
  );
};

export default ProgressBar;

