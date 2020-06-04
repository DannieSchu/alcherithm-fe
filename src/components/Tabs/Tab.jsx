import React from 'react';
import PropTypes from 'prop-types';
import styles from './Tab.css';

const Tab = ({ tabName, selectedTab, onChange }) => (
  <>
    <input
      type="radio"
      id={tabName}
      name="tabbed"
      onChange={onChange}
      className={styles.tabInput} />
    <label
      htmlFor={tabName}
      className={selectedTab === tabName ? `${styles.tabLabel} ${styles.active}` : styles.tabLabel}>{tabName}</label>
  </>
);

Tab.propTypes = {
  tabName: PropTypes.string.isRequired,
  selectedTab: PropTypes.string,
  onChange: PropTypes.func
};

export default Tab;

