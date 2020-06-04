import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ConfettiCanvas from 'react-confetti-canvas';
import PandaGreeting from './PandaGreeting';
import SolutionsViewer from './SolutionsViewer';
import Button from '../Button/Button';
import Tabs from '../Tabs/Tabs';
import { useCurrentUser } from '../../hooks/AuthProvider';
import { useGetSolutions } from '../../hooks/getSolutions';
import { useGetConfetti } from '../../hooks/getConfetti';
import styles from './Results.css';

const Results = () => {
  const { firstName } = useCurrentUser();
  const { userSolutions, sampleSolution } = useGetSolutions();
  const confetti = useGetConfetti();
  const [selectedTab, setSelectedTab] = useState('Your Solutions');

  const handleTabChange = ({ target }) => {
    setSelectedTab(target.id);
  };

  return (
    <main className={styles.Results}>
      {confetti && <ConfettiCanvas className={styles.confetti}
        duration={0.014}
        paperCount={150}
        ribbonCount={5}
        colors={[
          ['#30C6E8', '#C39BD3'],
          ['#30E89F', '#76D7C4'],
          ['#F0B27A', '#7DCEA0']]} />}
      <section className={styles.left}>
        <PandaGreeting firstName={firstName} />
        <aside className={styles.buttons}>
          <Link to="/challenges">
            <Button buttonStyle="primary" buttonSize="small" backgroundColor="green">New Challenge</Button>
          </Link>
          <Link to="/history">
            <Button buttonStyle="primary" buttonSize="small" backgroundColor="mainBlue">History</Button>
          </Link>
        </aside>
      </section>

      <section className={styles.right}>
        <Tabs
          tabNames={['Your Solutions', 'Sample Solution']}
          selectedTab={selectedTab}
          onChange={handleTabChange} />
        {selectedTab === 'Your Solutions' && <SolutionsViewer solutions={userSolutions} heading={selectedTab} />}
        {selectedTab === 'Sample Solution' &&
          <SolutionsViewer solutions={[sampleSolution]} heading={selectedTab} />}
      </section>
    </main>
  );
};

export default Results;
