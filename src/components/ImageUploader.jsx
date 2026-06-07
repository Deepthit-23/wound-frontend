import { useState, useRef } from 'react';

export default function ImageUploader({ onImage }) {
  const [isDragOver, setIsDragOver] = useState(false);
  const fileInputRef = useRef(null);

  function handleFile(file) {
    if (file && file.type.startsWith('image/')) {
      onImage(file);
    }
  }

  function handleDrop(e) {
    e.preventDefault();
    setIsDragOver(false);
    const files = e.dataTransfer.files;
    if (files.length > 0) handleFile(files[0]);
  }

  function handleDragOver(e) {
    e.preventDefault();
    setIsDragOver(true);
  }

  function handleDragLeave(e) {
    e.preventDefault();
    setIsDragOver(false);
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>

      {/* Upload zone */}
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onClick={() => fileInputRef.current?.click()}
        style={{
          background: isDragOver ? 'rgba(59,130,246,0.1)' : 'rgba(255,255,255,0.04)',
          backdropFilter: 'blur(16px)',
          border: `2px dashed ${isDragOver ? 'rgba(6,182,212,0.8)' : 'rgba(59,130,246,0.35)'}`,
          borderRadius: 20,
          padding: '36px 24px',
          textAlign: 'center',
          cursor: 'pointer',
          transition: 'all 0.2s ease',
          boxShadow: isDragOver
            ? '0 0 30px rgba(59,130,246,0.2), inset 0 0 24px rgba(59,130,246,0.06)'
            : '0 0 0 transparent',
        }}
        onMouseEnter={e => {
          if (!isDragOver) e.currentTarget.style.borderColor = 'rgba(59,130,246,0.6)';
        }}
        onMouseLeave={e => {
          if (!isDragOver) e.currentTarget.style.borderColor = 'rgba(59,130,246,0.35)';
        }}
      >
        {/* Floating upload icon */}
        <div style={{
          width: 64, height: 64, borderRadius: 18,
          background: 'rgba(59,130,246,0.1)',
          border: '1px solid rgba(59,130,246,0.2)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          margin: '0 auto 18px',
          animation: 'float 3s ease-in-out infinite',
        }}>
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <defs>
              <linearGradient id="ug" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#3B82F6" />
                <stop offset="100%" stopColor="#06B6D4" />
              </linearGradient>
            </defs>
            <path stroke="url(#ug)" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
          </svg>
        </div>

        <p style={{ margin: 0, fontSize: 17, fontWeight: 700, color: '#FFFFFF' }}>
          Drop your image here
        </p>
        <p style={{ margin: '6px 0 0', fontSize: 12, color: '#475569' }}>
          or click to browse • JPG, PNG supported
        </p>
      </div>

      {/* Choose Image — gradient fill pill */}
      <button
        onClick={() => fileInputRef.current?.click()}
        onMouseEnter={e => {
          e.currentTarget.style.transform = 'scale(1.02)';
          e.currentTarget.style.boxShadow = '0 8px 28px rgba(59,130,246,0.45)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = '0 4px 16px rgba(59,130,246,0.3)';
        }}
        onMouseDown={e => { e.currentTarget.style.transform = 'scale(0.97)'; }}
        onMouseUp={e => { e.currentTarget.style.transform = 'scale(1.02)'; }}
        style={{
          width: '100%', padding: '13px', borderRadius: 50, border: 'none',
          background: 'linear-gradient(90deg,#3B82F6,#06B6D4)',
          color: '#FFF', fontWeight: 700, fontSize: 14,
          cursor: 'pointer', transition: 'all 0.2s ease',
          boxShadow: '0 4px 16px rgba(59,130,246,0.3)',
          letterSpacing: '0.01em',
        }}
      >
        Choose Image
      </button>

      {/* Open Camera — outlined gradient pill */}
      <button
        onClick={() => {
          const cam = document.createElement('input');
          cam.type = 'file';
          cam.accept = 'image/*';
          cam.capture = 'environment';
          cam.onchange = (e) => handleFile(e.target.files[0]);
          cam.click();
        }}
        onMouseEnter={e => {
          e.currentTarget.style.background = 'linear-gradient(90deg,#3B82F6,#06B6D4)';
          e.currentTarget.style.color = '#FFF';
          e.currentTarget.style.borderColor = 'transparent';
          e.currentTarget.style.transform = 'scale(1.02)';
          e.currentTarget.style.boxShadow = '0 8px 28px rgba(59,130,246,0.35)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.background = 'transparent';
          e.currentTarget.style.color = '#60A5FA';
          e.currentTarget.style.borderColor = 'rgba(59,130,246,0.4)';
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = 'none';
        }}
        onMouseDown={e => { e.currentTarget.style.transform = 'scale(0.97)'; }}
        onMouseUp={e => { e.currentTarget.style.transform = 'scale(1.02)'; }}
        style={{
          width: '100%', padding: '12px', borderRadius: 50,
          border: '1.5px solid rgba(59,130,246,0.4)',
          background: 'transparent',
          color: '#60A5FA', fontWeight: 700, fontSize: 14,
          cursor: 'pointer', transition: 'all 0.2s ease',
          letterSpacing: '0.01em',
        }}
      >
        Open Camera
      </button>

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        style={{ display: 'none' }}
        onChange={(e) => handleFile(e.target.files[0])}
      />
    </div>
  );
}
