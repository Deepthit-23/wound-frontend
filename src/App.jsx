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
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10 px-4">
      <h1 className="text-3xl font-bold text-blue-700 mb-1">WoundScan AI</h1>
      <p className="text-gray-500 text-sm mb-8">
        Upload a wound photo to get instant first aid guidance
      </p>

      <div className="w-full max-w-md space-y-5">
        <ImageUploader onImage={handleImage} />

        {preview && (
          <img src={preview} alt="Wound preview"
            className="w-full rounded-2xl object-cover max-h-64 shadow" />
        )}

        {loading && (
          <p className="text-center text-blue-600 font-medium animate-pulse">
            Analysing wound...
          </p>
        )}

        {error && (
          <p className="text-center text-red-500 text-sm">{error}</p>
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
  );
}