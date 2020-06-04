import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ConfettiCanvas from 'react-confetti-canvas';
import GifLoader from 'react-gif-loader';
import moment from 'moment';
import Editor from '../Editors/Editor';
import Button from '../Button/Button';
import Tabs from '../Tabs/Tabs';
import { useCurrentUser } from '../../hooks/AuthProvider';
import { useGetSolutions } from '../../hooks/getSolutions';
import styles from './Results.css';

const Results = () => {
  const { userSolutions, sampleSolution } = useGetSolutions();
  const user = useCurrentUser();
  const [confetti, setConfetti] = useState(true);
  const [selectedTab, setSelectedTab] = useState('Your Solutions');

  const handleTabChange = ({ target }) => {
    setSelectedTab(target.id);
  };
  const solutionElements = userSolutions.map(userSolution => (
    <li key={userSolution._id}>
      <p>Challenge Attempted:  {moment(userSolution.updatedAt).format('MM/D/YYYY')}</p>
      <Editor code={userSolution.solution} readOnly={true} />
    </li>
  ));

  useEffect(() => {
    const id = setTimeout(() => {
      setConfetti(false);
    }, 9000);
    return () => {
      clearTimeout(id);
    };
  }, []);

  const style = {
    marginTop: '8%',
    position: 'relative',
    right: '50%',
    width: '15rem',
    'z-index': '0'
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
        <section className={styles.displayName}>
          <h3>Nice Work, {user.firstName}!</h3>
          <div className={styles.panda}>
            <GifLoader
              loading={true}
              imageSrc="https://emojis.slackmojis.com/emojis/images/1498192826/2489/dancingpanda.gif?1498192826"
              imageStyle={style}
              overlayBackground="rgba(0,0,0,0)" />
          </div>
        </section>
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

        {selectedTab === 'Your Solutions' && <section className={styles.content}>
          <h3>Your Solutions</h3>
          <ul>
            {solutionElements}
          </ul>
        </section>}

        {selectedTab === 'Sample Solution' && <section className={styles.content}>
          <h3>Sample Solution</h3>
          <Editor code={sampleSolution} readOnly={true} />
        </section>}

      </section>

    </main>
  );
};

export default Results;
