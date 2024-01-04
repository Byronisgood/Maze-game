// App.js
import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './components/menu';
import Game from './components/game';
import ModalWinner from './modalwinner';
import TitleScreen from './components/TitleScreen';
import Instructions from './components/Instructions';
import AboutUs from './components/AboutUs';
import './App.css';


class App extends Component {
  state = {
    columns: 10,
    rows: 10,
    gameStart: false,
    player: 1,
    reds: [],
    steps: 0,
    totalCarrots: 0,
    collectedCarrots: 0,
    showModalWinner: false,
    
  };

  handleChange = this.handleChange.bind(this);
  handleSubmit = this.handleSubmit.bind(this);
  createReds = this.createReds.bind(this);
  movePlayer = this.movePlayer.bind(this);
  setLevel = this.setLevel.bind(this);

  handleSubmit(e) {
    e.preventDefault();
    const { columns, rows } = this.state;
    let playerPosition = Math.ceil(
      ((columns * rows) / 2) % 2 === 0
        ? (columns * rows) / 2 - columns / 2
        : Math.ceil((columns * rows) / 2)
    );
    document.documentElement.style.setProperty('--columns', columns);
    document.documentElement.style.setProperty('--rows', rows);
    this.setState({ gameStart: true, player: playerPosition }, () => {
      this.createReds();
    });
  }

  handleChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  movePlayer(e) {
    if (this.state.showModalWinner) {
      return; // Don't process key events if modal is showing
    }

    if (this.state.reds.includes(this.state.player)) {
      this.removeReds(this.state.player);
    }

    switch (e.keyCode) {
      case 39:
        this.setState((prevState) => ({
          player:
            prevState.player + 1 <= prevState.columns * prevState.rows &&
            prevState.player % prevState.columns !== 0
              ? prevState.player + 1
              : prevState.player,
          steps: prevState.steps + 1,
        }));
        break;
      case 37:
        this.setState((prevState) => ({
          player:
            prevState.player - 1 > 0 && prevState.player % prevState.columns !== 1
              ? prevState.player - 1
              : prevState.player,
          steps: prevState.steps + 1,
        }));
        break;
      case 38:
        this.setState((prevState) => ({
          player:
            prevState.player - prevState.columns > 0
              ? prevState.player - prevState.columns
              : prevState.player,
          steps: prevState.steps + 1,
        }));
        break;
      case 40:
        this.setState((prevState) => ({
          player:
            prevState.player + Number(prevState.columns) <=
            prevState.columns * prevState.rows
              ? prevState.player + Number(prevState.columns)
              : prevState.player,
          steps: prevState.steps + 1,
        }));
        break;
      default:
        break;
    }
  }

  createReds() {
    const { columns, rows, player } = this.state;
    let array = [];
    let index = 0;
    let totalCarrots = 0;

    for (let i = 0; i < columns; i++) {
      for (let j = 0; j < rows; j++) {
        index++;
        if (Math.ceil(Math.random() * 10) === 5) {
          if (index !== player) {
            array.push(index);
            totalCarrots++;
          }
        }
      }
    }

    this.setState({ reds: array, totalCarrots });
  }

  updateCarrots = () => {
    this.setState(
      (prevState) => ({
        collectedCarrots: prevState.collectedCarrots + 1,
        totalCarrots: prevState.totalCarrots - 1,
      }),
      () => {
        if (this.state.totalCarrots === 0) {
          this.openModalWinner();
        }
      }
    );
  };

  removeReds(red) {
    let array = [...this.state.reds];
    let index = array.indexOf(red);
    array.splice(index, 1);
    this.setState({ reds: array }, () => {
      if (this.state.reds.length === 0) {
        this.openModalWinner();
      }
    });
  }

  setLevel(columns, rows) {
    this.setState({ columns, rows });
  }

  openModalWinner() {
    this.setState({ showModalWinner: true });
  }

  closeModalWinner() {
    this.setState({
      showModalWinner: false,
      gameStart: false,
      steps: 0,
      collectedCarrots: 0,
      totalCarrots: 0,
      player: 1,
      reds: [],
    });
  }

  restartGame = () => {
    this.setState({
      columns: 10,
      rows: 10,
      gameStart: false,
      player: 1,
      reds: [],
      steps: 0,
      totalCarrots: 0,
      collectedCarrots: 0,
      showModalWinner: false,
    });
  };

  render() {
    return (
      <Router>
        <Routes>
          <Route
            path="/Maze-game"
            element={
              <Fragment>
                <TitleScreen />
              </Fragment>
            }
          />
          <Route
            path="/menu"
            element={
              <Fragment>
                <div className="App">
                  {this.state.gameStart ? (
                    <Game
                      movePlayer={this.movePlayer}
                      columns={this.state.columns}
                      rows={this.state.rows}
                      player={this.state.player}
                      steps={this.state.steps}
                      reds={this.state.reds}
                      totalCarrots={this.state.totalCarrots}
                      collectedCarrots={this.state.collectedCarrots}
                      updateCarrots={this.updateCarrots}
                      onObstacleHit={() => {
                        alert('Game Over! You hit an obstacle.');
                      }}
                    />
                  ) : (
                    <Menu
                      columns={this.state.columns}
                      rows={this.state.rows}
                      handleSubmit={this.handleSubmit}
                      handleChange={this.handleChange}
                      setLevel={this.setLevel}
                    />
                  )}
                </div>
                <ModalWinner
                  show={this.state.showModalWinner}
                  onClose={() => this.closeModalWinner()}
                  steps={this.state.steps - 1}
                  restartGame={this.restartGame}
                />
              </Fragment>
            }
          />
          <Route path="/instructions" element={<Instructions />} />
          <Route path="/aboutus" element={<AboutUs />} />
        </Routes>
      </Router>
    );
  }
}

export default App;