import React from 'react';
import PropTypes from 'prop-types';
import styles from './Tab.css';

const Tab = ({ selectedTab, tabName, handleTabChange }) => {
  return (
    <>
      <input 
        type="radio" 
        id={tabName} 
        name="tabbed" 
        onChange={handleTabChange} 
        className={styles.tabInput}
      />
      <label 
        htmlFor={tabName} 
        className={selectedTab === tabName ? `${styles.tabLabel} ${styles.active}` : styles.tabLabel}>{tabName}</label>
    </>
  );
};

Tab.propTypes = {
  selectedTab: PropTypes.string.isRequired,
  tabName: PropTypes.string.isRequired,
  handleTabChange: PropTypes.func.isRequired
};

export default Tab;

