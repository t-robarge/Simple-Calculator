import React, { useState } from 'react';
import Display from './Display';
import Keypad from './Keypad';
import './Calculator.css';

const Calculator = () => {
  const [display, setDisplay] = useState('0');
  const [memory, setMemory] = useState(null);
  const [operation, setOperation] = useState(null);
  const [isNewNumber, setIsNewNumber] = useState(true);
  const [isRadianMode, setIsRadianMode] = useState(true); // true for radians, false for degrees

  const formatNumber = (num) => {
    const number = parseFloat(num);
    
    // Handle special cases
    if (isNaN(number)) return 'Error';
    if (!isFinite(number)) return 'Error';
    
    const absNum = Math.abs(number);
    
    // Convert to scientific notation if number is very large or very small
    if (absNum >= 1e12 || (absNum < 1e-9 && absNum > 0)) {
      // toExponential(6) will show 6 decimal places in scientific notation
      return number.toExponential(6);
    }
    
    // For regular numbers, limit decimal places to 9 to prevent overflow
    const formatted = number.toString();
    if (formatted.includes('.')) {
      const [integer, decimal] = formatted.split('.');
      if (decimal.length > 9) {
        return `${integer}.${decimal.slice(0, 9)}`;
      }
    }
    
    return formatted;
  };

  const handleNumber = (num) => {
    // Special handling for π
    if (num === 'π') {
      setDisplay(Math.PI.toString());
      setIsNewNumber(true);
      return;
    }

    if (isNewNumber) {
      setDisplay(num);
      setIsNewNumber(false);
    } else {
      // Prevent multiple decimal points
      if (num === '.' && display.includes('.')) return;
      setDisplay(display + num);
    }
  };

  const toggleMode = () => {
    setIsRadianMode(!isRadianMode);
  };

  const handleOperation = (op) => {
    // Handle mode toggle
    if (op === 'mode') {
      toggleMode();
      return;
    }

    // Handle immediate operations (trig functions, log)
    if (['sin', 'cos', 'tan', 'log'].includes(op)) {
      const value = parseFloat(display);
      let result;

      switch (op) {
        case 'sin':
          // If in degree mode, convert to radians before calculation
          result = Math.sin(isRadianMode ? value : value * Math.PI / 180);
          break;
        case 'cos':
          result = Math.cos(isRadianMode ? value : value * Math.PI / 180);
          break;
        case 'tan':
          result = Math.tan(isRadianMode ? value : value * Math.PI / 180);
          break;
        case 'log':
          if (value <= 0) {
            setDisplay('Error');
            setIsNewNumber(true);
            return;
          }
          result = Math.log10(value);
          break;
        default:
          return;
      }

      setDisplay(formatNumber(result));
      setIsNewNumber(true);
      return;
    }

    // Handle regular operations
    const formattedValue = formatNumber(display);
    setOperation(op);
    setMemory(parseFloat(formattedValue));
    setIsNewNumber(true);
  };

  const calculate = () => {
    const current = parseFloat(display);
    let result = 0;

    switch (operation) {
      case '+':
        result = memory + current;
        break;
      case '-':
        result = memory - current;
        break;
      case '*':
        result = memory * current;
        break;
      case '/':
        if (current === 0) {
          setDisplay('Error');
          setOperation(null);
          setMemory(null);
          setIsNewNumber(true);
          return;
        }
        result = memory / current;
        break;
      default:
        return;
    }

    // Format the result before displaying
    setDisplay(formatNumber(result));
    setOperation(null);
    setMemory(null);
    setIsNewNumber(true);
  };

  const handleClear = () => {
    setDisplay('0');
    setIsNewNumber(true);
  };

  const handleAllClear = () => {
    setDisplay('0');
    setMemory(null);
    setOperation(null);
    setIsNewNumber(true);
  };

  return (
    <div className="calculator">
      <div className="mode-indicator">
        Mode: {isRadianMode ? 'RAD' : 'DEG'}
      </div>
      <Display value={display} />
      <Keypad 
        onNumber={handleNumber}
        onOperation={handleOperation}
        onCalculate={calculate}
        onClear={handleClear}
        onAllClear={handleAllClear}
        isRadianMode={isRadianMode}
      />
    </div>
  );
};

export default Calculator; 