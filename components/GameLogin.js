import React from 'react';
import './GameLogin.css';

const GameLogin = () => {
  const games = [
    {
      name: 'Mobile Legends',
      image: '/images/mobile-legends.jpg',
      description: 'Game MOBA mobile terpopuler'
    },
    {
      name: 'Geometry Dash',
      image: '/images/geometry-dash.jpg',
      description: 'Rhythm-based platformer'
    },
    {
      name: 'Roblox',
      image: '/images/roblox.jpg',
      description: 'Platform gaming world'
    },
    {
      name: 'Minecraft',
      image: '/images/minecraft.jpg',
      description: 'Sandbox & survival game'
    },
    {
      name: 'Clash of Clans',
      image: '/images/clash-of-clans.jpg',
      description: 'Strategy mobile game'
    },
    {
      name: 'Call of Duty Mobile',
      image: '/images/cod-mobile.jpg',
      description: 'First-person shooter mobile'
    },
    {
      name: 'Team Fortress 2',
      image: '/images/tf2.jpg',
      description: 'Team-based FPS'
    },
    {
      name: 'Valorant',
      image: '/images/valorant.jpg',
      description: 'Tactical FPS'
    }
  ];

  return (
    <section id="games" className="game-login section">
      <div className="container">
        <div className="section-header">
          <h2>🎮 Mari Login!</h2>
          <p className="section-description">
            Game-game populer yang dimainkan komunitas terastudio
          </p>
        </div>
        
        <div className="games-grid grid grid-4">
          {games.map((game, index) => (
            <div key={index} className="game-card card">
              <div className="game-image">
                <div 
                  className="game-bg-image"
                  style={{
                    backgroundImage: `url(${game.image})`
                  }}
                >
                  <div className="game-overlay"></div>
                </div>
              </div>
              <div className="game-content">
                <h3 className="game-title">{game.name}</h3>
                <p className="game-description">{game.description}</p>
                <button className="btn btn-secondary game-btn">
                  Login Game
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GameLogin;