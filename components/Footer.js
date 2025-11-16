import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    quickLinks: [
      { name: 'Beranda', href: '#home' },
      { name: 'Games', href: '#games' },
      { name: 'Meme Generator', href: '#meme-generator' },
      { name: 'Komunitas', href: '#community' },
      { name: 'Kontak', href: '#contact' }
    ],
    community: [
      { name: 'WhatsApp Group', href: 'https://chat.whatsapp.com/DSDH1s8NRrIFDD1WwbmqUJ' },
      { name: 'Keluh Kesah', href: 'https://chat.whatsapp.com/HSvMVWjvgfEAKslPGoSBKz' },
      { name: 'YouTube Channel', href: 'https://youtube.com/@terastudioo' },
      { name: 'Feedback Form', href: 'https://forms.gle/ng6ZphQwZBrjdZdWA' }
    ],
    games: [
      'Mobile Legends',
      'Geometry Dash',
      'Roblox',
      'Minecraft',
      'Clash of Clans',
      'Valorant'
    ]
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Brand Section */}
          <div className="footer-brand">
            <h3 className="brand-title">terastudio</h3>
            <p className="brand-description">
              Komunitas gaming dan meme yang ramah untuk semua. 
              Bergabunglah dengan ribuan anggota yang berbagi kecintaan 
              terhadap gaming dan konten humor!
            </p>
            <div className="brand-tagline">
              <span>~terastudio, i like it~</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4 className="section-title">Quick Links</h4>
            <ul className="footer-links">
              {footerLinks.quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="footer-link">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Community Links */}
          <div className="footer-section">
            <h4 className="section-title">Komunitas</h4>
            <ul className="footer-links">
              {footerLinks.community.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-link"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Games */}
          <div className="footer-section">
            <h4 className="section-title">Popular Games</h4>
            <ul className="footer-links">
              {footerLinks.games.map((game, index) => (
                <li key={index}>
                  <span className="footer-game">{game}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="copyright">
              © {currentYear} terastudio. All rights reserved.
            </p>
            <div className="footer-stats">
              <span className="stat-item">
                🎮 {Math.floor(Math.random() * 5000) + 2000}+ Active Players
              </span>
              <span className="stat-item">
                😂 {Math.floor(Math.random() * 10000) + 5000}+ Memes Shared
              </span>
              <span className="stat-item">
                👥 {Math.floor(Math.random() * 1000) + 500}+ Community Members
              </span>
            </div>
          </div>
        </div>

        {/* Community Values */}
        <div className="footer-values">
          <div className="values-content">
            <h4>🌟 Valores Komunitas</h4>
            <div className="values-grid">
              <span className="value-tag">🛡️ Respect</span>
              <span className="value-tag">🤝 Unity</span>
              <span className="value-tag">🎮 Gaming</span>
              <span className="value-tag">😂 Humor</span>
              <span className="value-tag">💬 Openness</span>
              <span className="value-tag">❤️ Support</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;