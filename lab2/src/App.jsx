import React from 'react';
import WebSocketComponent from './components/WebSocket/WebSocketComponent';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Веб сокет</h1>
      <WebSocketComponent /> {/*echo.websocket.events*/} 
      {/*echo.websocket.events/.ws*/} 
    </div>
  );
}

export default App;