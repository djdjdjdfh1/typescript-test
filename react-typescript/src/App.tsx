import React from 'react';
import logo from './logo.svg';
import './App.css';
import CounterComp from './CounterComp';

function App() {
  return (
    <div className="App">
      <CounterComp startNumber={20} />
    </div>
  );
}

export default App;
