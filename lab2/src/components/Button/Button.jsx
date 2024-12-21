import React from 'react';
import './Button.css';

const Button = ({ onClick, label, disabled }) => {
  return (
    <button className="chess-button" onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
};

export default Button;