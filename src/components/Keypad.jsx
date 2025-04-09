import React from 'react';
import './Keypad.css';

const Keypad = ({ onNumber, onOperation, onCalculate, onClear, onAllClear, isRadianMode }) => {
  return (
    <div className="calculator-keypad">
      {/* Mode and Scientific Functions Row */}
      <div className="keypad-row scientific">
        <button onClick={() => onOperation('mode')} className="mode-btn">
          {isRadianMode ? 'RAD' : 'DEG'}
        </button>
        <button onClick={() => onOperation('sin')}>sin</button>
        <button onClick={() => onOperation('cos')}>cos</button>
        <button onClick={() => onOperation('tan')}>tan</button>
      </div>
      {/* Memory and Clear Row */}
      <div className="keypad-row memory">
        <button onClick={onAllClear} className="clear-btn">AC</button>
        <button onClick={onClear} className="clear-btn">C</button>
        <button onClick={() => onOperation('log')}>log</button>
        <button onClick={() => onOperation('/')} className="operation-btn">/</button>
      </div>
      {/* Number Rows */}
      <div className="keypad-row">
        <button onClick={() => onNumber('7')}>7</button>
        <button onClick={() => onNumber('8')}>8</button>
        <button onClick={() => onNumber('9')}>9</button>
        <button onClick={() => onOperation('*')} className="operation-btn">×</button>
      </div>
      <div className="keypad-row">
        <button onClick={() => onNumber('4')}>4</button>
        <button onClick={() => onNumber('5')}>5</button>
        <button onClick={() => onNumber('6')}>6</button>
        <button onClick={() => onOperation('-')} className="operation-btn">-</button>
      </div>
      <div className="keypad-row">
        <button onClick={() => onNumber('1')}>1</button>
        <button onClick={() => onNumber('2')}>2</button>
        <button onClick={() => onNumber('3')}>3</button>
        <button onClick={() => onOperation('+')} className="operation-btn">+</button>
      </div>
      <div className="keypad-row">
        <button onClick={() => onNumber('0')}>0</button>
        <button onClick={() => onNumber('.')}>.</button>
        <button onClick={() => onNumber('π')} className="constant-btn">π</button>
        <button onClick={onCalculate} className="operation-btn">=</button>
      </div>
    </div>
  );
};

export default Keypad; 