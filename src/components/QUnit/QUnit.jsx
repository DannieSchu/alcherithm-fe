import React, { useEffect, useState } from 'react';
import styles from './QUnit.css';

const Tester = ({ tests, setPassed }) => {
  const [details, setDetails] = useState({});
  
  useEffect(() => {
    window.QUnit = null;

    const qunitScript = document.createElement('script');
    qunitScript.src = 'https://code.jquery.com/qunit/qunit-2.10.0.js';
    qunitScript.async = true;
    document.body.appendChild(qunitScript);

    const testScript  = document.createElement('script');
    qunitScript.addEventListener('load', () => {
      testScript.innerHTML = tests;
      document.body.appendChild(testScript);
      QUnit.done((details) => {
        console.log(details);
        setDetails({ 
          passed: Math.min(details.passed, 1), 
          failed: Math.min(details.failed, 1),
          total: Math.min(details.total, 1)
        });
        setPassed(!!details.passed);
      });
    });

    return () => {
      qunitScript.remove();
      testScript.remove();
    };
  }, [tests]);

  return (
    <section className={styles.QUnit}>
      <p>Total: {details.total}</p>
      <p>Passed: {details.passed}</p>
      <p>Failed: {details.failed}</p>
    </section>
  );
};

export default Tester;
