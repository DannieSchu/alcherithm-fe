import React from 'react';
import Editor from '../Editors/Editor';
import Tester from './QUnit';
import Button from '../Button/Button';
import Overview from './Overview';
import Loading from '../Loading/Loading';
import { useHandleTest } from '../../hooks/handleTest';
import styles from './TestPage.css';
import tabStyle from '../../styles/tabs.css';

const TestPage = () => {
  const { challenge, runCode, setPassed, handleRun, handleCodeChange, handleSubmit } = useHandleTest();

  if(!challenge)
    return <Loading />;

  return (
    <section className={styles.TestPage}>
      <section className={styles.overview}>
        <Overview {...challenge} {...challenge.resources} />
        <section className={styles.testResults}>
          <article>
            <div>
              <h3>Test Results</h3>
              <Tester className={styles.testResults} tests={runCode} setPassed={setPassed} />
            </div>
            <Button buttonStyle="primary" buttonSize="medium" backgroundColor="green" onClick={handleSubmit}>Submit</Button>
          </article>
        </section>
      </section>
      <section className={styles.solution}>
        <section className={tabStyle.tabs}>
          <input type="radio" id="solution" />
          <label htmlFor="solution" className={tabStyle.active}>Challenge</label>
        </section>
        <section className={styles.content}>
          <h3>Starter Code</h3>
          <Editor code={challenge.starterCode} handleCodeChange={handleCodeChange} />
          <article>
            <h3>Test</h3>
            <Button buttonStyle="primary" backgroundColor="mainBlue" buttonSize="small" onClick={handleRun}>Run</Button>
          </article>
          <Editor code={challenge.qunitTest} />
        </section>
      </section>
    </section>
  );
};

export default TestPage; 
