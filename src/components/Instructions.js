import React from 'react';
import { Link } from 'react-router-dom';
import './Instructions.css'; 

const Instructions = () => {
  return (
    <div className="instructions-container">
      <h1 style={{ fontSize: '36px', marginBottom: '20px', color: '#e6dede' }}>Game Instructions</h1>
      <div className="instructions-content">
        <p>Welcome to Maze Game! Here's how to play:</p>
        <ol>
          <li>Use the arrow keys (← ↑ → ↓) to navigate through the maze.</li>
          <li>Collect carrots by moving over them. They will appear as red squares.</li>
          <li>Avoid obstacles, represented by spikes. If you hit an obstacle, the game is over.</li>
          <li>Your goal is to collect all the carrots in the maze to win.</li>
          <li>Complete the maze in the fewest steps possible to achieve the best score.</li>
        </ol>
        <p>Ready to explore the maze? Start your adventure now!</p>
      </div>
      <div className="glitch-button-container">
        
          <a href="/Maze-game" className="btn-glitch-fill">
            <span className="text">// Back to Title Screen</span><span className="text-decoration">_</span><span className="decoration">&rArr;</span>
          </a>
        </div>
      </div>

  );
};

export default Instructions;
