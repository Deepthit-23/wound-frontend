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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-blue-100">
        <div className="max-w-4xl mx-auto px-4 py-6 text-center">
          <h1 className="text-4xl font-bold text-blue-800 mb-2">WoundScan AI</h1>
          <p className="text-blue-600 text-lg font-medium">
            Advanced wound classification for immediate first aid guidance
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-4xl mx-auto px-4 py-8 w-full">
        <div className="space-y-8">
          <ImageUploader onImage={handleImage} />

          {preview && (
            <div className="bg-white rounded-2xl shadow-lg border border-blue-100 overflow-hidden animate-fade-in">
              <div className="bg-blue-50 px-6 py-4 border-b border-blue-100">
                <h3 className="text-lg font-semibold text-blue-800">Wound Preview</h3>
              </div>
              <div className="p-6">
                <img
                  src={preview}
                  alt="Wound preview"
                  className="w-full max-w-md mx-auto rounded-xl object-cover shadow-md"
                />
              </div>
            </div>
          )}

          {loading && (
            <div className="bg-white rounded-2xl shadow-lg border border-blue-100 p-8 animate-fade-in">
              <div className="flex flex-col items-center space-y-4">
                <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-200 border-t-blue-600"></div>
                <p className="text-blue-700 font-medium text-lg">Analyzing wound...</p>
                <p className="text-blue-500 text-sm">This may take a few seconds</p>
              </div>
            </div>
          )}

          {error && (
            <div className="bg-red-50 border border-red-200 rounded-2xl p-6 animate-fade-in">
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
                <p className="text-red-700 font-medium">{error}</p>
              </div>
            </div>
          )}

          {result && (
            <div className="space-y-6 animate-fade-in">
              <ResultCard result={result} />
              <FirstAidSteps steps={result.first_aid_steps} />
            </div>
          )}
        </div>
      </main>

      {/* Footer Disclaimer */}
      {result && <Disclaimer text={result.disclaimer} />}
    </div>
  );
}