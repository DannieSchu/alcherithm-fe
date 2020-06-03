import React, { useState, useEffect } from 'react';
import { useGetSolutions } from '../../hooks/getSolutions';
import { Link } from 'react-router-dom';
import Editor from '../Editors/Editor';
import { useCurrentUser } from '../../hooks/AuthProvider';
import Button from '../Button/Button';
import moment from 'moment';
import ConfettiCanvas from 'react-confetti-canvas';
import GifLoader from 'react-gif-loader';
import styles from './Results.css';
import tabStyle from '../../styles/tabs.css';

const Results = () => {
  const { userSolutions, sampleSolution } = useGetSolutions();
  const user = useCurrentUser();
  const [confetti, setConfetti] = useState(true);
  const [selectedTab, setSelectedTab] = useState('YourSolutions');

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
        <section className={tabStyle.tabs}>
          <input type="radio" id="YourSolutions" name="tabbed" onChange={handleTabChange} />
          <input type="radio" id="SampleSolution" name="tabbed" onChange={handleTabChange} />

          <label htmlFor="YourSolutions" className={selectedTab === 'YourSolutions' && tabStyle.active}>Your Solutions</label>
          <label htmlFor="SampleSolution" className={selectedTab === 'SampleSolution' && tabStyle.active}>Sample Solution</label>
        </section>

        {selectedTab === 'YourSolutions' && <section className={styles.content}>
          <h3>Your Solutions</h3>
          <ul>
            {solutionElements}
          </ul>
        </section>}

        {selectedTab === 'SampleSolution' && <section className={styles.content}>
          <h3>Sample Solution</h3>
          <Editor code={sampleSolution} readOnly={true} />
        </section>}

      </section>

    </main>
  );
};

export default Results;
