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
    <div className="space-y-3">
      {/* Upload zone */}
      <div
        className={`rounded-2xl border-2 border-dashed px-6 py-8 text-center cursor-pointer transition-colors ${
          isDragOver
            ? 'border-[#2563EB] bg-blue-100'
            : 'border-[#93C5FD] bg-blue-50'
        }`}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onClick={() => fileInputRef.current?.click()}
      >
        <svg className="w-10 h-10 mx-auto mb-3 text-[#2563EB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
        </svg>
        <p className="text-sm text-slate-600">Upload a wound photo or use your camera</p>
      </div>

      {/* Choose Image button */}
      <button
        onClick={() => fileInputRef.current?.click()}
        className="w-full rounded-full bg-[#2563EB] py-3 text-white font-semibold text-sm hover:bg-[#1D4ED8] transition-colors"
      >
        Choose Image
      </button>

      {/* Open Camera button */}
      <button
        onClick={() => {
          const cam = document.createElement('input');
          cam.type = 'file';
          cam.accept = 'image/*';
          cam.capture = 'environment';
          cam.onchange = (e) => handleFile(e.target.files[0]);
          cam.click();
        }}
        className="w-full rounded-full bg-[#16A34A] py-3 text-white font-semibold text-sm hover:bg-[#15803D] transition-colors"
      >
        Open Camera
      </button>

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
