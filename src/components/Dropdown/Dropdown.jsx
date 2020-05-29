import React from 'react';
import { categories } from '../../utils/categories';
import PropTypes from 'prop-types';
import styles from './Dropdown.css';

const Dropdown = ({ setCategory, category }) => {
  const categoryOptions = categories.map(category => (
    <option key={category} value={category}>{category}</option>
  ));

  return (
    <select className={styles.Dropdown} id="category" value={category} onChange={({ target }) => setCategory(target.value)}>
      <option value="allCategories">Choose Category</option>
      {categoryOptions}
    </select>
  );
};

Dropdown.propTypes = {
  setCategory: PropTypes.func.isRequired
};

export default Dropdown;
