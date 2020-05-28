import React from 'react';
import PropTypes from 'prop-types';
import styles from './buttons.css';
import sizes from './sizes.css';

const Button = ({ onClick, buttonText, buttonStyle, buttonSize }) => <button className={`${styles[buttonStyle]} ${sizes[buttonSize]}`} onClick={onClick}>{buttonText}</button>;

Button.propTypes = {
  buttonStyle: PropTypes.string,
  buttonSize: PropTypes.string,
  buttonText: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

export default Button;
