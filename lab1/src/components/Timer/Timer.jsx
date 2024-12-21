import React, { useEffect, useState } from 'react';
import './Timer.css';

const Timer = ({ time, isActive }) => {
  const formatTime = (seconds) => {
    const mins = String(Math.floor(seconds / 60)).padStart(2, '0');
    const secs = String(seconds % 60).padStart(2, '0');
    return `${mins}:${secs}`;
  };

  return (
    <div className="timer">
      {formatTime(time)}
    </div>
  );
};

export default Timer;