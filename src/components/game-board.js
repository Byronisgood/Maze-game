// game-board.js
import React, { Component } from 'react';
import Square from './square';
import './rules.css';
import bgMusic from './Music/birdMusic.mp3';
class GameBoard extends Component {
	constructor(props) {
	  super(props);
	  this.state = {
		fixedObstacles: [],
	  };
	}
  
	componentDidMount() {
	  this.generateFixedObstacles();
	}
	
	componentDidMount() {
		this.generateFixedObstacles();
		this.playBackgroundMusic();
	  }
	
	  componentWillUnmount() {
		this.pauseBackgroundMusic();
	  }
	
	  playBackgroundMusic() {
		this.audio = new Audio(bgMusic);
		this.audio.loop = true;
		this.audio.play();
	  }
	
	  pauseBackgroundMusic() {
		if (this.audio) {
		  this.audio.pause();
		  this.audio.currentTime = 0;
		}
	  }
  
	generateFixedObstacles() {
	  const { columns, rows, player, reds } = this.props;
	  const obstacleCount = Math.ceil(columns * rows * 0.1); 
	  const newObstacles = [];
  
	  while (newObstacles.length < obstacleCount) {
		const position = Math.ceil(Math.random() * (columns * rows));
		if (
		  !newObstacles.includes(position) &&
		  position !== player &&
		  !reds.includes(position) &&
		  !reds.some((red) => Math.abs(red - position) <= columns) 
		) {
		  newObstacles.push(position);
		}
	  }
  
	  this.setState({ fixedObstacles: newObstacles });
	}
  
	
	  
	  render() {
		const { columns, rows, player, steps, reds, updateCarrots, totalCarrots, collectedCarrots } = this.props;
		const { fixedObstacles } = this.state;
	  
		return (
		  <div
			className="game-board"
			onKeyDown={this.props.movePlayer}
			tabIndex="0"
			ref={(game) => game && game.focus()}
		  >
			{Array.from({ length: columns * rows }, (_, index) => (
			 <Square
			 key={index + 1}
			 counter={index + 1}
			 player={player}
			 reds={reds}
			 isObstacle={fixedObstacles.includes(index + 1)} 
			 onSquareClick={(counter) => this.handleSquareClick(counter, updateCarrots)}
		   />
		   
			))}
		
		  </div>
		);
	  }
  }
  
  export default GameBoard;