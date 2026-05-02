import { useState } from 'react';
import { usePredict } from './hooks/usePredict';
import ImageUploader from './components/ImageUploader';
import ResultCard from './components/ResultCard';
import FirstAidSteps from './components/FirstAidSteps';
import Disclaimer from './components/Disclaimer';

export default function App() {
  const { predict, result, loading, error } = usePredict();
  const [preview, setPreview] = useState(null);

  function handleImage(file) {
    setPreview(URL.createObjectURL(file));
    predict(file);
  }

  return (
    <div className="min-h-screen bg-[#0A0F1E] text-[#CBD5E1]">
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-16 space-y-16">
        <header className="text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-white">
            WoundScan <span className="bg-gradient-to-r from-[#3B82F6] to-[#06B6D4] bg-clip-text text-transparent">AI</span>
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-[#94A3B8] leading-8">
            AI-powered wound detection and first-aid guidance in a premium dark interface.
          </p>
        </header>

        {/* Upload Zone */}
        <div className="animate-fade-in-up">
          <ImageUploader onImage={handleImage} />
        </div>

        {preview && !loading && (
          <section className="animate-fade-in-up">
            <div className="max-w-3xl mx-auto rounded-[32px] border border-[#1E293B] bg-[#111827] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
              <div className="mb-4 text-center">
                <p className="text-sm uppercase tracking-[0.3em] text-[#94A3B8]">Preview</p>
                <h2 className="mt-3 text-2xl font-semibold text-white">Selected image is ready</h2>
              </div>
              <div className="overflow-hidden rounded-[24px] border border-[#111827] bg-[#0F172A]">
                <img src={preview} alt="Wound preview" className="w-full h-72 object-cover" />
              </div>
            </div>
          </section>
        )}

        {loading && (
          <section className="animate-fade-in-up">
            <div className="max-w-3xl mx-auto rounded-[32px] border border-[#1E293B] bg-[#111827] p-8 text-center shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
              <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full bg-[#0F172A] border border-[#2563EB]">
                <svg className="h-10 w-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <p className="text-2xl font-semibold text-white mb-2">Analysing wound...</p>
              <p className="text-[#94A3B8]">This may take a few seconds.</p>
            </div>
          </section>
        )}

        {/* Error State */}
        {error && (
          <div className="flex justify-center animate-fade-in-up">
            <div className="bg-[#111827] border border-red-500/30 rounded-2xl p-6 shadow-xl max-w-md">
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
                <p className="text-red-300 font-medium">{error}</p>
              </div>
            </div>
          </div>
        )}

        {/* Results */}
        {result && (
          <div className="space-y-8 animate-fade-in-up">
            <ResultCard result={result} />
            <FirstAidSteps steps={result.first_aid_steps} />
          </div>
        )}
      </div>

      {/* Disclaimer Footer */}
      {result && <Disclaimer text={result.disclaimer} />}
    </div>
  );
}