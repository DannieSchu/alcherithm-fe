import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.css';

const Button = ({ onClick, buttonText, buttonClass }) => <button className={styles[buttonClass]} onClick={onClick}>{buttonText}</button>;

Button.propTypes = {
  buttonText: PropTypes.string.isRequired,
  buttonClass: PropTypes.string,
  onClick: PropTypes.func
};

export default Button;
