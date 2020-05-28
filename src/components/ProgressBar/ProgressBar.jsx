import React from 'react';
import { useUserAttempted, useUserTotal } from '../../hooks/AuthProvider';
import { Progress } from 'semantic-ui-react';
import styles from './ProgressBar.css';

const ProgressBar = () => {
  const attempted = useUserAttempted();
  const total = useUserTotal();

  return (
    <div className={styles.ProgressBar}>
      <Progress value={attempted} total={total} progress='ratio' />
    </div>
  );
};

export default ProgressBar;
