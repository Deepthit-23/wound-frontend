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
      {/* Upload Zone */}
      <div
        className={`relative group cursor-pointer transition-all duration-300 ${
          isDragOver ? 'scale-105' : 'hover:scale-102'
        }`}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onClick={() => fileInputRef.current?.click()}
      >
        <div className="absolute inset-0 rounded-[32px] border border-[#3B82F6]/20 pointer-events-none"></div>
        <div className={`relative bg-[rgba(255,255,255,0.04)] border border-[#3B82F6] border-dashed rounded-[32px] p-12 text-center transition duration-200 shadow-none ${
          isDragOver
            ? 'border-[#60A5FA] bg-[rgba(59,130,246,0.12)] shadow-[0_0_0_1px_rgba(59,130,246,0.35)] scale-105'
            : 'border-[#3B82F6] hover:border-[#60A5FA] hover:bg-[rgba(59,130,246,0.08)]'
        }`}>
          <div className="relative space-y-8">
            <div className="w-24 h-24 mx-auto rounded-3xl bg-[#111827] border border-[#1E293B] flex items-center justify-center shadow-lg shadow-black/30">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
            </div>

            <div className="space-y-3">
              <h3 className="text-3xl font-bold text-white mb-2">Upload Wound Image</h3>
              <p className="text-[#CBD5E1] text-lg leading-relaxed">
                Drag & drop your image here, or click to browse files.
              </p>
              <p className="text-[#94A3B8] text-sm">
                Supports JPG, PNG, WebP • Max 10MB
              </p>
            </div>

            <div className="flex justify-center">
              <button className="rounded-full bg-[#3B82F6] px-8 py-4 text-white font-semibold transition duration-200 hover:bg-[#2563EB]">
                Choose File
              </button>
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
          className="inline-flex items-center justify-center rounded-full bg-[#0891B2] px-10 py-4 text-white font-semibold transition duration-200 hover:bg-[#0E7490]"
        >
          <svg className="mr-3 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          Open Camera
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