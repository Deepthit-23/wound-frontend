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
    if (files.length > 0) {
      handleFile(files[0]);
    }
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
    <div className="max-w-2xl mx-auto space-y-6">
      {/* Main Upload Zone */}
      <div
        className={`relative group cursor-pointer transition-all duration-300 ${
          isDragOver ? 'scale-105' : 'hover:scale-102'
        }`}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onClick={() => fileInputRef.current?.click()}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-300"></div>
        <div className={`relative bg-glass-gradient backdrop-blur-xl border rounded-3xl p-12 text-center transition-all duration-500 shadow-2xl ${
          isDragOver
            ? 'border-violet-glow/60 bg-violet-glow/10 shadow-violet-glow/20 scale-105'
            : 'border-white/20 hover:border-cyan-glow/40 hover:bg-white/8 hover:shadow-cyan-glow/10'
        }`}>
          {/* Shimmer effect on hover */}
          <div className="absolute inset-0 rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          </div>

          <div className="relative space-y-8">
            <div className="w-24 h-24 mx-auto bg-gradient-to-br from-violet-glow to-cyan-glow rounded-3xl flex items-center justify-center shadow-2xl shadow-violet-glow/30 animate-float">
              <svg className="w-12 h-12 text-white drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
            </div>

            <div className="space-y-3">
              <h3 className="text-3xl font-bold text-white mb-2">Upload Wound Image</h3>
              <p className="text-text-light text-lg leading-relaxed">
                Drag & drop your image here, or click to browse files
              </p>
              <p className="text-text-muted text-sm">
                Supports JPG, PNG, WebP • Max 10MB
              </p>
            </div>

            <div className="flex justify-center">
              <div className="group/btn relative px-8 py-4 bg-gradient-to-r from-violet-glow to-cyan-glow rounded-2xl text-white font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-glow to-violet-glow opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center space-x-3">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  <span>Choose File</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Camera Button */}
      <div className="flex justify-center">
        <button
          onClick={(e) => {
            e.stopPropagation();
            const cameraInput = document.createElement('input');
            cameraInput.type = 'file';
            cameraInput.accept = 'image/*';
            cameraInput.capture = 'environment';
            cameraInput.onchange = (e) => handleFile(e.target.files[0]);
            cameraInput.click();
          }}
          className="group relative px-10 py-5 bg-glass-gradient backdrop-blur-xl border border-white/20 rounded-3xl text-white font-semibold hover:border-cyan-glow/40 hover:bg-white/10 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-cyan-glow/20 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-glow/10 to-violet-glow/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative flex items-center space-x-4">
            <div className="p-2 bg-gradient-to-r from-cyan-glow to-violet-glow rounded-xl shadow-lg">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div className="text-left">
              <div className="font-bold">Open Camera</div>
              <div className="text-sm text-text-muted">Take a photo directly</div>
            </div>
          </div>
        </button>
      </div>

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => handleFile(e.target.files[0])}
      />
    </div>
  );
}