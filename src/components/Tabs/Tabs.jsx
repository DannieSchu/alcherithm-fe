import React from 'react';
import PropTypes from 'prop-types';
import Tab from './Tab';
import styles from './Tabs.css';

const Tabs = ({ tabNames, selectedTab, onChange }) => {
  const tabElements = tabNames.map(tab => <Tab tabName={tab} selectedTab={selectedTab} key={tab} onChange={onChange} />);

  return (
    <section className={styles.Tabs}>
      {tabElements}
    </section>
  );
};

Tabs.propTypes = {
  selectedTab: PropTypes.string.isRequired,
  tabNames: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onChange: PropTypes.func.isRequired
};

export default Tabs;

