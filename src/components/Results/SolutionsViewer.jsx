import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Editor from '../Editors/Editor';
import styles from './SolutionsViewer.css';

const SolutionsViewer = ({ solutions, heading }) => {
  const solutionElements = solutions.map(solution => (
    <li key={solution._id}>
      {heading === 'Your Solutions' && <p>Date Attempted:  {moment(solution.updatedAt).format('MM/D/YYYY')}</p>}
      <Editor code={heading === 'Your Solutions' ? solution.solution : solution} readOnly={true} />
    </li>
  ));

  return (
    <section className={styles.SolutionsViewer}>
      <h3>{heading}</h3>
      <ul>
        {solutionElements}
      </ul>
    </section>
  );
};

SolutionsViewer.propTypes = {
  solutions: PropTypes.array.isRequired,
  heading: PropTypes.string.isRequired
};

export default SolutionsViewer;
