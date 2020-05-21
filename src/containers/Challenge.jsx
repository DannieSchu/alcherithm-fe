import React, { useState } from 'react';
import Editor from '../components/Editors/Editor.jsx';
import Tester from '../components/QUnit/QUnit.jsx';

const Challenge = () => {
  const [challenge, setChallenge] = useState(`const addValues = (arr, value) => {
    arr.push(value);
};

const addNumbers = (num, arr, times, callback) => {
    for(let i = 0; i < times; i++) {
        callback(arr, num);
    }
    return arr;
};
`);
  const [test, setTest] = useState(`QUnit.test('It should add the number 8 to the array five times', assert => {
    const array = [];
    const result = addNumbers(8, array, 5, addValues);
    assert.equal(1, 1);
});
`);


  return (
    <section>
      <h2>Cool Challenege Stuff</h2>
      <Editor code={challenge} handleCodeChange={setChallenge} />
      <Editor code={test} />
      <Tester tests={`${challenge} \n \n ${test}`} />
    </section>
  );
};

export default Challenge; 
