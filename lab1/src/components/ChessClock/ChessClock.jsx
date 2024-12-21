import React, { useState, useEffect, useRef } from 'react';
import Timer from '../Timer/Timer';
import Button from '../Button/Button';
import './ChessClock.css';

const ChessClock = ({ initialTime }) => {
  const [timePlayer1, setTimePlayer1] = useState(initialTime);
  const [timePlayer2, setTimePlayer2] = useState(initialTime);
  const [activePlayer, setActivePlayer] = useState(null);
  const timerRef = useRef(null);

  useEffect(() => {
    if (activePlayer !== null) {
      timerRef.current = setInterval(() => {
        if (activePlayer === 1) {
          setTimePlayer1((prev) => prev - 1);
        } else {
          setTimePlayer2((prev) => prev - 1);
        }
      }, 1000);
    }

    return () => clearInterval(timerRef.current);
  }, [activePlayer]);

  useEffect(() => {
    if (timePlayer1 === 0 || timePlayer2 === 0) {
      clearInterval(timerRef.current);
      setActivePlayer(null);
      alert('Час вичерпано!');
    }
  }, [timePlayer1, timePlayer2]);

  const handleStartPlayer1 = () => {
    setActivePlayer(1);
  };

  const handleStartPlayer2 = () => {
    setActivePlayer(2);
  };

  const handlePause = () => {
    setActivePlayer(null);
    clearInterval(timerRef.current);
  };

  const handleReset = () => {
    setActivePlayer(null);
    clearInterval(timerRef.current);
    setTimePlayer1(initialTime);
    setTimePlayer2(initialTime);
  };

  return (
    <div className="chess-clock">
      <div className={`player ${activePlayer === 1 ? 'active' : ''}`}>
        <h2>Гравець 1</h2>
        <Timer time={timePlayer1} isActive={activePlayer === 1} />
      </div>
      <div className={`player ${activePlayer === 2 ? 'active' : ''}`}>
        <h2>Гравець 2</h2>
        <Timer time={timePlayer2} isActive={activePlayer === 2} />
      </div>
      <div className="controls">
        <Button onClick={handleStartPlayer1} label="Старт Гравець 1" />
        <Button onClick={handleStartPlayer2} label="Старт Гравець 2" />
        <Button onClick={handlePause} label="Пауза" />
        <Button onClick={handleReset} label="Скинути" />
      </div>
    </div>
  );
};

export default ChessClock;