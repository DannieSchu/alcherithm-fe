import React from 'react';
import PropTypes from 'prop-types';
import styles from './buttons.css';
import sizes from './sizes.css';
import colors from '../../styles/colors.css';

const Button = ({  
  children, 
  buttonStyle, 
  buttonSize, 
  backgroundColor,
  onClick }) => <button className={`${styles[buttonStyle]} ${sizes[buttonSize]} ${colors[backgroundColor]}`} onClick={onClick}>{children}</button>;

Button.propTypes = {
  buttonStyle: PropTypes.string,
  buttonSize: PropTypes.string,
  backgroundColor: PropTypes.string,
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

export default Button;
