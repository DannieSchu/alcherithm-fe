import React from 'react';
import PropTypes from 'prop-types';
import styles from './buttons.css';
import sizes from './sizes.css';
import colors from '../../styles/colors.css';

const Button = ({ 
  onClick, 
  buttonText, 
  buttonStyle, 
  buttonSize, 
  backgroundColor }) => <button className={`${styles[buttonStyle]} ${sizes[buttonSize]} ${colors[backgroundColor]}`} onClick={onClick}>{buttonText}</button>;

Button.propTypes = {
  buttonStyle: PropTypes.string,
  buttonSize: PropTypes.string,
  backgroundColor: PropTypes.string,
  buttonText: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

export default Button;
