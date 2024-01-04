import React from 'react';
import { Link } from 'react-router-dom'; 
import './rules.css';

const Menu = ({ columns, rows, handleSubmit, handleChange, setLevel, onLevelSelect }) => {
  const handleLevelClick = (level) => {
    let levelColumns, levelRows;


    switch (level) {
      case 1:
        levelColumns = 8;
        levelRows = 8;
        break;
      case 2:
        levelColumns = 16;
        levelRows = 16;
        break;
      case 3:
        levelColumns = 32;
        levelRows = 32;
        break;
      default:
        levelColumns = 10;
        levelRows = 10;
    }

    setLevel(levelColumns, levelRows);
  };

  return (
    <div className="menu">
      <h1>Choose a level</h1>
      <form onSubmit={handleSubmit}>
        <div className="level-buttons">
          <button className="level-button" onClick={() => handleLevelClick(1)}>
            Level 1 (8x8)
          </button>
          <button className="level-button" onClick={() => handleLevelClick(2)}>
            Level 2 (16x16)
          </button>
          <button className="level-button" onClick={() => handleLevelClick(3)}>
            Level 3 (32x32)
          </button>
        </div>
      </form>
      {/* Add the back button */}
      <Link to="/Maze-game" className="back-button">
         Back to Title Screen
      </Link>
    </div>
  );
};

export default Menu;
