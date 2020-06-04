import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
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
      testScript.innerHTML = `(function() { ${tests} })()`;
      document.body.appendChild(testScript);

      QUnit.done((details) => {
        setDetails({ 
          passed: details.failed ? 0 : 1, 
          failed: details.failed ? 1 : 0,
          total: 1
        });
        setPassed(!details.failed);
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

Tester.propTypes = {
  tests: PropTypes.array,
  setPassed: PropTypes.func
};

export default Tester;
