// game.js
import React, { Component } from 'react';
import GameBoard from './game-board';
import './rules.css';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameOver: false,
      collectedCarrots: 0,
      totalCarrots: 0,
    };
  }

  handleKeyDown = (direction) => {

    switch (direction) {
      case 'up':
        this.props.movePlayer({ keyCode: 38 });
        break;
      case 'down':
        this.props.movePlayer({ keyCode: 40 });
        break;
      case 'left':
        this.props.movePlayer({ keyCode: 37 });
        break;
      case 'right':
        this.props.movePlayer({ keyCode: 39 });
        break;
      default:
        break;
    }
  };

  render() {
    const { columns, rows, player, steps, reds, movePlayer, totalCarrots, collectedCarrots } = this.props;

    return (
      <div className="game" ref={(game) => game && game.focus()} onKeyDown={movePlayer} tabIndex="0">
        <h3>Eat all the Carrots to win the game</h3>
        <GameBoard
          columns={columns}
          rows={rows}
          player={player}
          steps={steps}
          reds={reds}
          movePlayer={movePlayer}
          onSquareClick={(counter) => this.handleSquareClick(counter, this.updateCarrots)}
          totalCarrots={this.state.totalCarrots} 
          collectedCarrots={this.state.collectedCarrots} 
          updateCarrots={this.updateCarrots}
        />

        <p>Your steps: {steps}</p>
        <p>Total Carrots: {totalCarrots}</p>

        {/* Floating buttons */}
        <div className="floating-buttons">
          <button onClick={() => this.handleKeyDown('up')}>↑</button>
          <button onClick={() => this.handleKeyDown('down')}>↓</button>
          <button onClick={() => this.handleKeyDown('left')}>←</button>
          <button onClick={() => this.handleKeyDown('right')}>→</button>
        </div>
      </div>
    );
  }
}

export default Game;
