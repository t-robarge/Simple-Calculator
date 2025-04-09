import React from 'react';
import './Display.css';

const Display = ({ value }) => {
  const isScientific = value.includes('e');
  
  return (
    <div className="calculator-display">
      <div className={`display-value ${isScientific ? 'scientific' : ''}`}>
        {value}
      </div>
    </div>
  );
};

export default Display; 