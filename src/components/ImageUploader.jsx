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
        <div className={`relative bg-white/5 backdrop-blur-xl border-2 border-dashed rounded-3xl p-12 text-center transition-all duration-300 ${
          isDragOver
            ? 'border-blue-400 bg-blue-500/10 shadow-2xl shadow-blue-500/20'
            : 'border-white/20 hover:border-blue-400/60 hover:bg-white/10'
        }`}>
          <div className="space-y-6">
            <div className="w-20 h-20 mx-auto bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-white mb-2">Drop your image here</h3>
              <p className="text-slate-400 text-lg">or click to browse your files</p>
            </div>

            <div className="flex justify-center">
              <div className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300">
                Choose File
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
          className="group relative px-8 py-4 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl text-white font-medium hover:bg-white/10 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative flex items-center space-x-3">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>Open Camera</span>
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