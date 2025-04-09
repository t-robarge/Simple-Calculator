import React from 'react';
import Calculator from './components/Calculator';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>TI-84 Web Calculator</h1>
      </header>
      <main>
        <Calculator />
      </main>
    </div>
  );
}

export default App; 