import React, { useState, useRef, useCallback } from 'react';
import html2canvas from 'html2canvas';
import './MemeGenerator.css';

const MemeGenerator = () => {
  const [image, setImage] = useState(null);
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const [topTextPosition, setTopTextPosition] = useState({ x: 50, y: 50 });
  const [bottomTextPosition, setBottomTextPosition] = useState({ x: 50, y: 300 });
  const [isDragging, setIsDragging] = useState(null);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  
  const canvasRef = useRef(null);
  const fileInputRef = useRef(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleMouseDown = useCallback((textType, event) => {
    event.preventDefault();
    setIsDragging(textType);
    
    const rect = event.currentTarget.getBoundingClientRect();
    setDragOffset({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top
    });
  }, []);

  const handleMouseMove = useCallback((event) => {
    if (!isDragging) return;
    
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left - dragOffset.x;
    const y = event.clientY - rect.top - dragOffset.y;
    
    // Constrain text within canvas bounds
    const maxX = rect.width - 200;
    const maxY = rect.height - 50;
    
    const constrainedX = Math.max(0, Math.min(x, maxX));
    const constrainedY = Math.max(0, Math.min(y, maxY));
    
    if (isDragging === 'top') {
      setTopTextPosition({ x: constrainedX, y: constrainedY });
    } else if (isDragging === 'bottom') {
      setBottomTextPosition({ x: constrainedX, y: constrainedY });
    }
  }, [isDragging, dragOffset]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(null);
  }, []);

  const downloadMeme = async () => {
    const canvasElement = canvasRef.current;
    if (canvasElement) {
      try {
        const canvas = await html2canvas(canvasElement, {
          backgroundColor: '#000000',
          scale: 1
        });
        
        const link = document.createElement('a');
        link.download = 'terastudio-meme.png';
        link.href = canvas.toDataURL();
        link.click();
      } catch (error) {
        console.error('Error generating meme:', error);
        alert('Terjadi kesalahan saat membuat meme. Silakan coba lagi.');
      }
    }
  };

  const clearMeme = () => {
    setImage(null);
    setTopText('');
    setBottomText('');
    setTopTextPosition({ x: 50, y: 50 });
    setBottomTextPosition({ x: 50, y: 300 });
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <section id="meme-generator" className="meme-generator section">
      <div className="container">
        <div className="section-header">
          <h2>🔥 Meme Generator</h2>
          <p className="section-description">
            Buat meme lucu seperti di imgflip.com! Upload gambar dan tambahkan teks
          </p>
        </div>

        <div className="meme-workspace">
          <div className="meme-controls">
            <div className="control-section">
              <h3>Upload Gambar</h3>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="input"
              />
            </div>

            <div className="control-section">
              <h3>Text Atas</h3>
              <input
                type="text"
                value={topText}
                onChange={(e) => setTopText(e.target.value)}
                placeholder="Masukkan text atas..."
                className="input"
              />
            </div>

            <div className="control-section">
              <h3>Text Bawah</h3>
              <input
                type="text"
                value={bottomText}
                onChange={(e) => setBottomText(e.target.value)}
                placeholder="Masukkan text bawah..."
                className="input"
              />
            </div>

            <div className="control-section">
              <h3>📋 Template Meme Populer</h3>
              <div className="template-grid">
                <button 
                  className="template-btn"
                  onClick={() => setImage('/templates/drake.jpg')}
                >
                  Drake
                </button>
                <button 
                  className="template-btn"
                  onClick={() => setImage('/templates/distracted.jpg')}
                >
                  Distracted
                </button>
                <button 
                  className="template-btn"
                  onClick={() => setImage('/templates/two-buttons.jpg')}
                >
                  Two Buttons
                </button>
                <button 
                  className="template-btn"
                  onClick={() => setImage('/templates/change-my-mind.jpg')}
                >
                  Change My Mind
                </button>
              </div>
            </div>

            <div className="control-actions">
              <button 
                className="btn btn-primary"
                onClick={downloadMeme}
                disabled={!image}
              >
                💾 Download Meme
              </button>
              <button 
                className="btn btn-secondary"
                onClick={clearMeme}
              >
                🗑️ Clear
              </button>
            </div>
          </div>

          <div className="meme-preview">
            <div 
              className="meme-canvas"
              ref={canvasRef}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
            >
              {image ? (
                <>
                  <img 
                    src={image} 
                    alt="Meme background" 
                    className="meme-background"
                    onLoad={() => {
                      // Set canvas size based on image
                      const img = new Image();
                      img.onload = () => {
                        setTopTextPosition({ x: 50, y: 50 });
                        setBottomTextPosition({ x: 50, y: img.height - 50 });
                      };
                      img.src = image;
                    }}
                  />
                  {topText && (
                    <div
                      className="meme-text-overlay top"
                      style={{
                        left: `${topTextPosition.x}px`,
                        top: `${topTextPosition.y}px`,
                      }}
                      onMouseDown={(e) => handleMouseDown('top', e)}
                    >
                      {topText}
                    </div>
                  )}
                  {bottomText && (
                    <div
                      className="meme-text-overlay bottom"
                      style={{
                        left: `${bottomTextPosition.x}px`,
                        top: `${bottomTextPosition.y}px`,
                      }}
                      onMouseDown={(e) => handleMouseDown('bottom', e)}
                    >
                      {bottomText}
                    </div>
                  )}
                </>
              ) : (
                <div className="meme-placeholder">
                  <div className="placeholder-content">
                    <span className="placeholder-icon">📷</span>
                    <p>Upload gambar atau pilih template untuk mulai membuat meme</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MemeGenerator;