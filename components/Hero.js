import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-overlay"></div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">terastudio👋</h1>
          <p className="hero-subtitle">
            Tempat berbagi meme, chatting, dan dapatkan banyak teman baru anda aqui!
          </p>
          <p className="hero-description">
            Boleh curhat, berbagi pengalaman, karya, dan yang lainnya aqui!
          </p>
          <p className="hero-group">
            Grup fans dari Lahelu dan Sendok Kecil :)
          </p>
          
          <div className="hero-actions">
            <a 
              href="https://chat.whatsapp.com/DSDH1s8NRrIFDD1WwbmqUJ" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Join WhatsApp Group
            </a>
            <a 
              href="https://youtube.com/@terastudioo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              Subscribe YouTube
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;