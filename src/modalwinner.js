// modalwinner.js
import React from 'react';
import './App.css';

const ModalWinner = ({ show, onClose, steps, restartGame }) => {
  const handlePlayAgain = () => {
    onClose();
    restartGame();
  };

  return (
    <div className={`modal ${show ? 'show' : 'hide'}`}>
      <div className="modal-content">
        <span className="close" onClick={handlePlayAgain}>
          Play again?
        </span>
        <p>Congratulations! You collected all carrots in {steps} steps.</p>
      </div>
    </div>
  );
};

export default ModalWinner;