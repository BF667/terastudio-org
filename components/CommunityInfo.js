import React from 'react';
import './CommunityInfo.css';

const CommunityInfo = () => {
  const communityRules = [
    {
      icon: '❌',
      title: 'Pornografi',
      description: 'Konten dewasa tidak diperkenankan'
    },
    {
      icon: '❌',
      title: 'Spam Furry dan Pedofilia',
      description: 'Dilarang keras konten tidak pantas'
    },
    {
      icon: '❌',
      title: 'Cyberbullying',
      description: 'Saling menghormati dan tidak melakukan penindasan'
    },
    {
      icon: '❌',
      title: 'Kebencian SARA',
      description: 'Dilarang ujaran kebencian dan diskriminasi'
    },
    {
      icon: '❌',
      title: 'Hal apapun yang dapat mengganggu kenyamanan',
      description: 'Jaga kenyamanan bersama keluarga terastudio'
    }
  ];

  const communityFeatures = [
    {
      icon: '🎮',
      title: 'Tempat Gaming',
      description: 'Berbagai game populer untuk dimainkan bersama'
    },
    {
      icon: '😂',
      title: 'Berbagi Meme',
      description: 'Platform untuk berbagi konten humor dan meme lucu'
    },
    {
      icon: '💬',
      title: 'Chatting Santai',
      description: 'Diskusi terbuka dan obrolan casual dengan teman baru'
    },
    {
      icon: '🎨',
      title: 'Berbagi Karya',
      description: 'Tempat untuk showcase karya kreatif dan karya seni'
    },
    {
      icon: '❤️',
      title: 'Komunitas Friendly',
      description: 'Lingkungan yang ramah dan suportif untuk semua member'
    },
    {
      icon: '📱',
      title: 'Fans Lahelu & Sendok Kecil',
      description: 'Komunitas khusus untuk para fans setia'
    }
  ];

  return (
    <section id="community" className="community-info section">
      <div className="container">
        {/* Community Features */}
        <div className="community-features">
          <div className="section-header">
            <h2>🌟 Mengapa Bergabung dengan Terastudio?</h2>
            <p className="section-description">
              Bergabung dengan komunitas gaming dan meme terlengkap!
            </p>
          </div>

          <div className="features-grid grid grid-3">
            {communityFeatures.map((feature, index) => (
              <div key={index} className="feature-card card">
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Community Guidelines */}
        <div className="community-rules">
          <div className="section-header">
            <h2>📋 Aturan Komunitas</h2>
            <p className="section-description">
              Boleh bahas apapun tapi tahu batasnya. Berikut hal yang tidak boleh dilakukan:
            </p>
          </div>

          <div className="rules-grid grid grid-2">
            {communityRules.map((rule, index) => (
              <div key={index} className="rule-card card">
                <div className="rule-icon">{rule.icon}</div>
                <h3 className="rule-title">{rule.title}</h3>
                <p className="rule-description">{rule.description}</p>
              </div>
            ))}
          </div>

          <div className="nsfw-notice">
            <div className="notice-content">
              <h3>⚠️ NSFW & Gore Disclaimer</h3>
              <p>
                <strong>Jika ingin share 'NSFW(18+) & Gore' sebaiknya 'one view only' saja.</strong>
              </p>
              <p>
                Kami berkomitmen menjaga lingkungan yang sehat dan nyaman untuk semua anggota komunitas. 
                Mohon bijaksana dalam berbagi konten.
              </p>
            </div>
          </div>
        </div>

        {/* Community Groups */}
        <div className="community-groups">
          <div className="section-header">
            <h2>📱 Join Grupos WhatsApp</h2>
            <p className="section-description">
              Berbagai grupo untuk berbagai kebutuhan komunitas
            </p>
          </div>

          <div className="groups-grid grid grid-3">
            <div className="group-card card">
              <div className="group-icon">🍴</div>
              <h3 className="group-title">terastudio spoonity</h3>
              <p className="group-description">Grupo utama untuk diskusi umum</p>
              <a 
                href="https://chat.whatsapp.com/DSDH1s8NRrIFDD1WwbmqUJ"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary group-btn"
              >
                Join Grup
              </a>
            </div>

            <div className="group-card card">
              <div className="group-icon">💭</div>
              <h3 className="group-title">keluhkesah terastudio</h3>
              <p className="group-description">Tempat curhat dan sharing</p>
              <a 
                href="https://chat.whatsapp.com/HSvMVWjvgfEAKslPGoSBKz"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary group-btn"
              >
                Join Grup
              </a>
            </div>

            <div className="group-card card">
              <div className="group-icon">📺</div>
              <h3 className="group-title">terastudio YouTube</h3>
              <p className="group-description">Subscribe channel YouTube kami</p>
              <a 
                href="https://youtube.com/@terastudioo"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary group-btn"
              >
                Subscribe
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityInfo;