import React from 'react';
import { Progress } from 'semantic-ui-react';
import styles from './ProgressBar.css';

const ProgressBar = ({ }) => {
  return (
    <div className={styles.ProgressBar}>
      <Progress value= total= progress='ratio' />
    </div>
  );
};

export default ProgressBar;


