// App.tsx
import React from 'react';
import './App.css'; 
import Calculator from './components/Calculator';

function App () {
  return (
    <div className="app-container">
      <h1 className="app-title">React Calculator</h1>
      <Calculator />
    </div>
  );
};

export default App;
