import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Open Google Forms in new tab
    const formUrl = 'https://forms.gle/ng6ZphQwZBrjdZdWA';
    const queryParams = new URLSearchParams({
      'entry.name': formData.name,
      'entry.email': formData.email,
      'entry.category': formData.category,
      'entry.message': formData.message
    });
    
    const fullUrl = `${formUrl}?${queryParams.toString()}`;
    window.open(fullUrl, '_blank');
    
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      category: '',
      message: ''
    });
  };

  const categories = [
    { value: 'kritik', label: 'Kritik' },
    { value: 'saran', label: 'Saran' },
    { value: 'pengaduan', label: 'Pengaduan' },
    { value: 'permintaan-fitut', label: 'Permintaan Fitur' },
    { value: 'bug-report', label: 'Bug Report' },
    { value: 'lainnya', label: 'Lainnya' }
  ];

  return (
    <section id="contact" className="contact-form section">
      <div className="container">
        <div className="section-header">
          <h2>📝 Kritik, Saran & Pengaduan</h2>
          <p className="section-description">
            Kami sangat menghargai feedback dari komunitas. Silakan berikan kritik, saran, atau laporkan masalah yang Anda hadapi.
          </p>
          <div className="disclaimer">
            <p>
              <strong>📋 DISCLAIMER:</strong> DATA PRIBADI ANDA AKAN TERJAGA AMAN!
            </p>
          </div>
        </div>

        <div className="form-container">
          <div className="form-info">
            <div className="info-card">
              <h3>🔒 Privasi Terjamin</h3>
              <p>
                Semua data yang Anda berikan akan dijaga kerahasiaannya dan hanya digunakan 
                untuk keperluan pengembangan komunitas terastudio yang lebih baik.
              </p>
            </div>
            
            <div className="info-card">
              <h3>⚡ Respons Cepat</h3>
              <p>
                Tim kami akan merespons feedback Anda secepat mungkin. Kritik dan saran 
                konstruktif sangat kami hargai untuk kemajuan komunitas.
              </p>
            </div>
            
            <div className="info-card">
              <h3>🌟 Kontribusi Anda</h3>
              <p>
                Setiap feedback yang Anda berikan sangat berarti untuk menciptakan 
                lingkungan komunitas yang lebih nyaman dan enjoyed untuk semua anggota.
              </p>
            </div>
          </div>

          <div className="form-wrapper">
            <form className="contact-form-card card" onSubmit={handleSubmit}>
              <h3>Kirim Feedback Anda</h3>
              
              <div className="form-group">
                <label htmlFor="name">Nama Lengkap</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Masukkan nama lengkap Anda"
                  required
                  className="input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="email@contoh.com"
                  required
                  className="input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="category">Kategori Feedback</label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  required
                  className="input"
                >
                  <option value="">Pilih kategori...</option>
                  {categories.map((category) => (
                    <option key={category.value} value={category.value}>
                      {category.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Pesan/Feedback</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tuliskan kritik, saran, atau laporan Anda di sini..."
                  required
                  rows="6"
                  className="textarea"
                />
                <small className="form-hint">
                  Jelaskan secara detail agar kami dapat memberikan response yang tepat
                </small>
              </div>

              <div className="form-actions">
                <button 
                  type="submit" 
                  className="btn btn-primary"
                  disabled={!formData.name || !formData.email || !formData.category || !formData.message}
                >
                  📤 Kirim Feedback
                </button>
                
                <a 
                  href="https://forms.gle/ng6ZphQwZBrjdZdWA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  🔗 Buka Google Forms
                </a>
              </div>

              {isSubmitted && (
                <div className="success-message">
                  ✅ Terima kasih! Form akan terbuka di tab baru untuk submit.
                </div>
              )}
            </form>
          </div>
        </div>

        <div className="alternative-contact">
          <h3>💬 Cara Lain Menghubungi Kami</h3>
          <div className="contact-methods grid grid-3">
            <div className="contact-method">
              <div className="method-icon">📱</div>
              <h4>WhatsApp Groups</h4>
              <p>Join grup WhatsApp untuk diskusi langsung</p>
              <a href="https://chat.whatsapp.com/DSDH1s8NRrIFDD1WwbmqUJ" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                Join Grup Utama
              </a>
            </div>
            
            <div className="contact-method">
              <div className="method-icon">📺</div>
              <h4>YouTube Channel</h4>
              <p>Subscribe channel untuk update terbaru</p>
              <a href="https://youtube.com/@terastudioo" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                Subscribe Channel
              </a>
            </div>
            
            <div className="contact-method">
              <div className="method-icon">💭</div>
              <h4>Keluh Kesah</h4>
              <p>Grup khusus untuk sharing dan curhat</p>
              <a href="https://chat.whatsapp.com/HSvMVWjvgfEAKslPGoSBKz" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                Join Keluh Kesah
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;