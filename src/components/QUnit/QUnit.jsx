import React, { useEffect, useState } from 'react';

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
        setDetails(details);
        setPassed(details.passed);
      });
    });

    return () => {
      qunitScript.remove();
      testScript.remove();
    };
  }, [tests]);

  return (
    <>
      <p>Total: {details.total}</p>
      <p>Passed: {details.passed}</p>
      <p>Failed: {details.failed}</p>
    </>
  );
};

export default Tester;
