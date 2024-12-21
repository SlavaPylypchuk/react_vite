import React, { useState } from 'react';
import useWebSocket from '../../hooks/useWebSocket';
import Button from '../Button/Button';
import './WebSocketComponent.css';

const WebSocketComponent = () => {
  const SOCKET_URL = 'wss://echo.websocket.events';
  const { messages, sendMessage, connectionStatus, connect, disconnect } = useWebSocket(SOCKET_URL);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim() !== '') {
      sendMessage(input);
      console.log('Sent:', input);
      setInput('');
    }
  };

  const handleConnect = () => {
    connect();
  };

  const handleDisconnect = () => {
    disconnect();
  };

  return (
    <div className="websocket-container">
      <h2>WebSocket Чат</h2>
      <div className="status">
        Статус З'єднання: <span>{connectionStatus}</span>
      </div>
      <div className="controls">
        {connectionStatus === 'DISCONNECTED' ? (
          <Button onClick={handleConnect} label="Підключитись" />
        ) : (
          <Button onClick={handleDisconnect} label="Відключитись" />
        )}
      </div>
      <div className="messages">
        {messages.map((msg, index) => (
          <div key={index} className="message">
            {msg}
          </div>
        ))}
      </div>
      {connectionStatus === 'CONNECTED' && (
        <div className="input-area">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Введіть повідомлення..."
          />
          <Button onClick={handleSend} label="Надіслати" />
        </div>
      )}
    </div>
  );
};

export default WebSocketComponent;