import React, { useState } from 'react';
import Display from './Display';
import Button from './Button';
import './Calculator.css';

const evaluateExpression = (expression) => {
  try {
    // Simple parser for basic arithmetic operations
    // This is a basic implementation and doesn't handle operator precedence or parentheses
    const operators = /[+\-*/]/;
    const tokens = expression.split(operators).map(Number);
    const operator = expression.match(operators);

    if (tokens.length === 2 && operator) {
      const [a, b] = tokens;
      switch (operator[0]) {
        case '+':
          return a + b;
        case '-':
          return a - b;
        case '*':
          return a * b;
        case '/':
          return b !== 0 ? a / b : 'Error';
        default:
          return 'Error';
      }
    } else {
      return 'Error';
    }
  } catch {
    return 'Error';
  }
};

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (label) => {
    if (label === '=') {
      setResult(evaluateExpression(input));
    } else if (label === 'C') {
      setInput('');
      setResult('');
    } else {
      setInput(input + label);
    }
  };

  return (
    <div className="calculator">
      <Display value={result || input || '0'} />
      <div className="buttons">
        {['1', '2', '3', '+', '4', '5', '6', '-', '7', '8', '9', '*', 'C', '0', '=', '/'].map((label) => (
          <Button key={label} label={label} onClick={handleClick} className={label === 'C' ? 'clear' : ''} />
        ))}
      </div>
    </div>
  );
};

export default Calculator;
