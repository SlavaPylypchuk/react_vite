import { useEffect, useRef, useState, useCallback } from 'react';

const useWebSocket = (url) => {
  const [messages, setMessages] = useState([]);
  const [connectionStatus, setConnectionStatus] = useState('DISCONNECTED');
  const ws = useRef(null);

  const connect = useCallback(() => {
    if (ws.current !== null) {
      console.warn('WebSocket Already Connected');
      return;
    }

    ws.current = new WebSocket(url);

    ws.current.onopen = () => {
      setConnectionStatus('CONNECTED');
      console.log('WebSocket Connected');
    };
    
    ws.current.onmessage = (event) => {
      const message = event.data;
      console.log('Received:', message);
      setMessages((prevMessages) => [...prevMessages, `Received: ${message}`]);
    };
    
    ws.current.onclose = (event) => {
      setConnectionStatus('DISCONNECTED');
      ws.current = null;
      console.log('WebSocket Disconnected', event);
    };
    
    ws.current.onerror = (error) => {
      console.error('WebSocket Error:', error);
      ws.current.close();
    };
  }, [url]);

  const disconnect = useCallback(() => {
    if (ws.current) {
      ws.current.close();
      ws.current = null;
    }
  }, []);

  const sendMessage = useCallback((message) => {
    if (ws.current && ws.current.readyState === WebSocket.OPEN) {
      ws.current.send(message);
      console.log('Sent:', message);
    } else {
      console.error('WebSocket is not open. Unable to send message:', message);
    }
  }, []);

  useEffect(() => {
    return () => {
      if (ws.current) {
        ws.current.close();
      }
    };
  }, []);

  return { messages, sendMessage, connectionStatus, connect, disconnect };
};

export default useWebSocket;