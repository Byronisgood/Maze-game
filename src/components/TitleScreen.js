import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './TitleScreen.css'; 
import bgMusic from './Music/bgMusic.mp3'; 
const TitleScreen = () => {
  useEffect(() => {
    const audio = new Audio(bgMusic);
    audio.loop = true;

    const playAudio = () => {
      audio.play();
      document.removeEventListener('click', playAudio);
    };

    // Check if the audio can be played without user interaction
    const playPromise = audio.play();

    if (playPromise !== undefined) {
      playPromise.then(() => {
        // Autoplay started
      }).catch(() => {
        // Autoplay was prevented
        document.addEventListener('click', playAudio);
      });
    }

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);


  return (
    <div className="title-screen">
      <h1 className="title">Maze Game</h1>
      <p className="subtitle">Navigate 2D mazes, conquer grid challenges, and gather delicious food.</p>
      <div className="link-container">
        
      </div>
      {/* New Glitch-style buttons */}
      <div className="glitch-button1-containers">
        <Link to="/menu" className="btn-glitch-fill">
          <span className="glitch-text">Play a game</span>
        </Link>
        <Link to="/instructions" className="btn-glitch-fill">
          <span className="glitch-text">How to play</span>
        </Link>
        <Link to="/aboutus" className="btn-glitch-fill">
          <span className="glitch-text">About us</span>
        </Link>
      </div>
    </div>
  );
};

export default TitleScreen;
