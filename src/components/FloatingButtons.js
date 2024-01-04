// FloatingButtons.js
import React from 'react';
import './rules.css';

const FloatingButtons = ({ onMove }) => {
  const handleButtonClick = (direction) => {
    onMove(direction);
  };

  return (
    <div className="floating-buttons">
      <button onClick={() => handleButtonClick('UP')}>Up</button>
      <button onClick={() => handleButtonClick('DOWN')}>Down</button>
      <button onClick={() => handleButtonClick('LEFT')}>Left</button>
      <button onClick={() => handleButtonClick('RIGHT')}>Right</button>
    </div>
  );
};

export default FloatingButtons;
