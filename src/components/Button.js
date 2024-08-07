import React from 'react';
import './Button.css';

const Button = ({ label, onClick, className }) => {
  const isOperator = ['+', '-', '*', '/'].includes(label);
  const isEqual = label === '=';
  const buttonClass = `button ${className} ${isOperator ? 'operator' : ''} ${isEqual ? 'equal' : ''}`;
  
  return (
    <button className={buttonClass} onClick={() => onClick(label)}>
      {label}
    </button>
  );
};

export default Button;
