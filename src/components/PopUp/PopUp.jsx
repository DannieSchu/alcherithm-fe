import React from 'react';
import PropTypes from 'prop-types';
import Editor from '../Editors/Editor';
import styles from './PopUp.css';

const PopUp = ({ toggle, solutions }) => {
  const solutionElements = solutions.map((solution, i) => (
    <div key={i} >
      <Editor code={solution} />
    </div>
  ));

  return (
    <section className={styles.PopUp}>
      <span onClick={() => toggle()}>✖️</span>
      <article>
        <h3>Your Solutions</h3>
        {solutionElements};
      </article>
    </section>
  );
};

PopUp.propTypes = {
  solutions: PropTypes.array.isRequired,
  toggle: PropTypes.func.isRequired
};

export default PopUp;
