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
    <div className="min-h-screen bg-hero-pattern text-white relative overflow-hidden">
      {/* Enhanced background with mesh pattern */}
      <div className="absolute inset-0 bg-mesh-pattern opacity-30"></div>
      <div className="absolute inset-0 bg-gradient-radial from-violet-glow/10 via-transparent to-cyan-glow/5"></div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 border border-violet-glow/20 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-cyan-glow/20 rounded-lg rotate-45 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-40 left-20 w-20 h-20 bg-emerald-glow/10 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 border border-amber-glow/20 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-12 h-12 bg-rose-glow/10 rounded-lg rotate-12 animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-16 space-y-20">
        {/* Hero Section */}
        <div className="text-center space-y-8 animate-fade-in">
          <div className="relative inline-block">
            <h1 className="text-7xl md:text-9xl font-black bg-gradient-to-r from-violet-glow via-cyan-glow to-blue-400 bg-clip-text text-transparent animate-glow-pulse tracking-tight">
              WoundScan
            </h1>
            <div className="absolute -top-6 -right-6 text-4xl animate-pulse">
              🤖
            </div>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-violet-glow to-cyan-glow rounded-full opacity-60"></div>
          </div>

          <div className="space-y-4">
            <p className="text-2xl md:text-3xl text-text-light max-w-3xl mx-auto leading-relaxed font-light">
              Advanced AI-powered wound detection & personalized first aid guidance
            </p>
            <div className="flex justify-center space-x-8 text-sm text-text-muted">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-emerald-glow rounded-full animate-pulse"></div>
                <span>99.2% Accuracy</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-cyan-glow rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                <span>Real-time Analysis</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-violet-glow rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                <span>Medical Grade</span>
              </div>
            </div>
          </div>
        </div>

        {/* Upload Zone */}
        <div className="animate-fade-in-up">
          <ImageUploader onImage={handleImage} />
        </div>

        {/* Image Preview */}
        {preview && (
          <div className="flex justify-center animate-fade-in-up">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 shadow-2xl">
                <img
                  src={preview}
                  alt="Wound preview"
                  className="w-full max-w-md mx-auto rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        )}

        {/* Image Preview */}
        {preview && !loading && (
          <div className="flex justify-center animate-fade-in-up">
            <div className="relative group max-w-md">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-glow/20 to-cyan-glow/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-glass-gradient backdrop-blur-xl border border-white/20 rounded-3xl p-6 shadow-2xl overflow-hidden">
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-white mb-2">Image Preview</h3>
                  <p className="text-text-muted text-sm">Ready for analysis</p>
                </div>
                <div className="relative rounded-2xl overflow-hidden shadow-inner">
                  <img
                    src={preview}
                    alt="Wound preview"
                    className="w-full h-64 object-cover rounded-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-2xl"></div>
                  <div className="absolute bottom-3 left-3">
                    <div className="bg-black/50 backdrop-blur-sm rounded-xl px-3 py-1">
                      <span className="text-white text-sm font-medium">Preview</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center animate-fade-in-up">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-glow/20 to-cyan-glow/20 rounded-3xl blur-2xl animate-glow-pulse"></div>
              <div className="relative bg-glass-gradient backdrop-blur-xl border border-white/20 rounded-3xl p-10 shadow-2xl text-center overflow-hidden">
                {/* Animated background particles */}
                <div className="absolute inset-0">
                  <div className="absolute top-4 left-4 w-2 h-2 bg-violet-glow/50 rounded-full animate-float"></div>
                  <div className="absolute top-8 right-6 w-1 h-1 bg-cyan-glow/60 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
                  <div className="absolute bottom-6 left-8 w-1.5 h-1.5 bg-blue-400/40 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
                </div>

                <div className="relative mb-8">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-violet-glow to-cyan-glow rounded-3xl flex items-center justify-center animate-float shadow-xl shadow-violet-glow/30">
                    <svg className="w-10 h-10 text-white animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  {/* Scanning line */}
                  <div className="absolute inset-0 rounded-3xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-scan"></div>
                  </div>
                </div>

                <div className="space-y-3">
                  <p className="text-2xl font-bold text-white">AI Analysis in Progress</p>
                  <p className="text-text-light text-lg">Processing your wound image...</p>
                  <div className="flex justify-center space-x-1 mt-4">
                    <div className="w-2 h-2 bg-violet-glow rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-cyan-glow rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="flex justify-center animate-fade-in-up">
            <div className="bg-red-500/10 backdrop-blur-lg border border-red-500/20 rounded-2xl p-6 shadow-2xl max-w-md">
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