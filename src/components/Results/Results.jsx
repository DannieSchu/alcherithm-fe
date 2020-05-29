import React, { useState, useEffect } from 'react';
import styles from './Results.css';
import { useGetSolutions } from '../../hooks/getSolutions';
import { Link } from 'react-router-dom';
import Editor from '../Editors/Editor';
import { useCurrentUser } from '../../hooks/AuthProvider';
import Button from '../Button/Button';
import moment from 'moment';
import ConfettiCanvas from 'react-confetti-canvas';
import GifLoader from 'react-gif-loader';

// import panda from '../../assets/prize/dancingpanda.gif';

const Results = () => {
  const { userSolutions, sampleSolution } = useGetSolutions();
  const user = useCurrentUser();
  const [confetti, setConfetti] = useState(true);

  const solutionElements = userSolutions.map(userSolution => (
    <li key={userSolution._id}>
      <p>{moment(userSolution.updatedAt).format('MMMM Do YYYY h:mm a')}</p>
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
    marginTop: '10%',
    position: 'relative',
    right: '36%' };

  return (
    <main className={styles.Results}>
      {confetti && <ConfettiCanvas className={styles.confetti}
        duration={0.014}
        paperCount={150}
        ribbonCount={5}
        colors={[
          ['#30C6E8', '#C39BD3'],
          ['#30E89F', '#76D7C4'],
          ['#F0B27A', '#7DCEA0']]}/>}
      <section className={styles.displayName}>
        <h3>Nice Work, {user.firstName}!</h3>
        <GifLoader 
          loading={true} 
          imageSrc="https://emojis.slackmojis.com/emojis/images/1498192826/2489/dancingpanda.gif?1498192826"
          className={styles.panda}
          imageStyle={style}
          overlayBackground="rgba(0,0,0,0)"/>
      </section>

      <section className={styles.right}>
        <section clasName={styles.editorBox}>
          <aside className={styles.editors}>
            <h3>Your Solutions</h3>
            <ul>
              {solutionElements} 
            </ul>
          </aside>

          <aside className={styles.editors}>
            <h3>Sample Solution</h3>
            <Editor code={sampleSolution} readOnly={true} />
          </aside>
        </section>

        <aside className={styles.buttons}>
          <Link to="/challenges">
            <Button buttonStyle="primary" buttonSize="small" backgroundColor="green" buttonText="New Challenge" />
          </Link>
          <Link to="/history">
            <Button buttonStyle="primary" buttonSize="small" backgroundColor="mainBlue" buttonText="History" />
          </Link>
        </aside>
      </section>

    </main>
  );
};

export default Results;


