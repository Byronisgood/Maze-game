// square.js
import React from 'react';
import './rules.css';
const Square = ({ counter, player, reds, isObstacle, }) => {
  const isPlayer = counter === player;

  const squareClassName = `${isPlayer ? 'player' : 'square'} ${reds.includes(counter) ? 'reds' : ''} ${
    isObstacle ? 'obstacle' : ''
  }`;


  if (isPlayer && isObstacle) {
    alert('Game Over! You hit an obstacle.');

  }

  return (
    <div className={squareClassName} >
      {isPlayer && <div className="player"></div>}
    </div>
  );
};

export default Square;
