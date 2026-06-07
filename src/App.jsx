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
    <div className="min-h-screen bg-slate-200 flex justify-center items-start">
      <div className="w-full max-w-[430px] min-h-screen bg-white flex flex-col shadow-2xl">

        {/* Header */}
        <header className="bg-white px-5 pt-10 pb-5 text-center border-b border-slate-100">
          <h1 className="text-3xl font-extrabold text-[#2563EB]">WoundScan AI</h1>
          <p className="mt-1 text-sm text-slate-500">Upload a wound photo to get instant first aid guidance</p>
        </header>

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto px-4 py-5 space-y-4">

          <ImageUploader onImage={handleImage} />

          {preview && !loading && (
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
              <img src={preview} alt="Wound preview" className="w-full object-cover max-h-64" />
            </div>
          )}

          {loading && (
            <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full border-4 border-[#2563EB] border-t-transparent animate-spin" />
              <p className="text-base font-semibold text-slate-700">Analysing wound...</p>
              <p className="text-sm text-slate-400 mt-1">This may take a few seconds.</p>
            </div>
          )}

          {error && (
            <div className="rounded-2xl border border-red-200 bg-red-50 p-4 flex items-start gap-3">
              <svg className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
              <p className="text-sm text-red-600 font-medium">{error}</p>
            </div>
          )}

          {result && (
            <>
              <ResultCard result={result} />
              <FirstAidSteps steps={result.first_aid_steps} />
              <Disclaimer text={result.disclaimer} />
            </>
          )}

        </div>
      </div>
    </div>
  );
}
