// AboutUs.js
import React from 'react';
import { Link } from 'react-router-dom';
import './AboutUs.css'; 

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <h1 className="about-us-header">About Us</h1>
      <div className="about-us-content">
        <p>
          Welcome to Maze Game! We are a team of passionate developers dedicated to creating
          engaging and challenging maze games for you. Our goal is to provide a fun and immersive
          gaming experience that keeps you entertained.
        </p>
        <p>
          Meet the developers:
        </p>
        <ul className="developer-list">
          <li>
            <strong>Byron Alexis R. Reyes</strong> - Lead Developer
            <p>Byron is responsible for the overall game design and development. He enjoys creating innovative gameplay mechanics and challenging mazes.</p>
          </li>
          <li>
            <strong>Byron Alexis R. Reyes</strong> - UI/UX Designer
            <p>Byron focuses on designing a user-friendly interface and creating a visually appealing gaming environment. She believes in the power of good design.</p>
          </li>
          <li>
            <strong>Patrick M. Paddila</strong> - Game Tester
            <p>Patrick rigorously tests the game to ensure a bug-free experience. His dedication to quality assurance contributes to a smooth and enjoyable gameplay.</p>
          </li>
          <li>
            <strong>Patrick M. Paddila</strong> - Sound Engineer
            <p>Patrick brings the game to life with captivating sound effects and music. Her creativity enhances the overall immersive experience for players.</p>
          </li>
        </ul>
        <p>
          We appreciate your support and hope you have a fantastic time exploring our maze game!
        </p>
      </div>
      <div className="glitch-button-container">
        
          <a href="/Maze-game" className="btn-glitch-fill">
            <span className="text">// Back to Title Screen</span><span className="text-decoration">_</span><span className="decoration">&rArr;</span>
          </a>
        </div>
      </div>

  );
};

export default AboutUs;
