import React from 'react';
import ChessClock from './components/ChessClock/ChessClock';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Шаховий Годинник</h1>
      <ChessClock initialTime={300} /> {/* 5 хвилин */}
    </div>
  );
}

export default App;