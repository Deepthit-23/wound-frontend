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
    <div style={{
      background: '#0A0F1E',
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      fontFamily: "'Inter', system-ui, sans-serif",
    }}>
      <div style={{ width: '100%', maxWidth: 420, minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>

        {/* ── Header ── */}
        <header style={{ padding: '40px 20px 22px', textAlign: 'center' }}>
          {/* Pulsing cross */}
          <div style={{
            width: 44, height: 44, borderRadius: '50%',
            background: 'rgba(239,68,68,0.1)',
            border: '1.5px solid rgba(239,68,68,0.3)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            margin: '0 auto 16px',
            animation: 'pulse-ring 2s ease-in-out infinite',
          }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M12 4v16M4 12h16" stroke="#EF4444" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          </div>

          <h1 style={{ margin: 0, fontSize: 30, fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.5px' }}>
            WoundScan{' '}
            <span style={{
              background: 'linear-gradient(90deg,#3B82F6,#06B6D4)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>AI</span>
          </h1>
          <p style={{ margin: '8px 0 0', fontSize: 13, color: '#64748B', lineHeight: 1.6 }}>
            AI-powered wound detection & first aid guidance
          </p>

          {/* Gradient divider */}
          <div style={{
            height: 1, marginTop: 20,
            background: 'linear-gradient(90deg,transparent,rgba(59,130,246,0.6),rgba(6,182,212,0.6),transparent)',
            boxShadow: '0 0 10px rgba(59,130,246,0.25)',
          }} />
        </header>

        {/* ── Scrollable content ── */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '0 16px 36px', display: 'flex', flexDirection: 'column', gap: 14 }}>

          <ImageUploader onImage={handleImage} />

          {/* Preview — shown while loading AND after complete */}
          {preview && (
            <div style={{
              position: 'relative', borderRadius: 16, overflow: 'hidden',
              border: '1.5px solid rgba(59,130,246,0.45)',
              boxShadow: loading ? '0 0 28px rgba(59,130,246,0.22)' : '0 0 16px rgba(59,130,246,0.12)',
              animation: 'slide-up-fade 0.4s ease both',
              transition: 'box-shadow 0.3s ease',
            }}>
              <img
                src={preview}
                alt="Wound preview"
                style={{
                  width: '100%', display: 'block', maxHeight: 260, objectFit: 'cover',
                  opacity: loading ? 0.6 : 1,
                  transition: 'opacity 0.4s ease',
                }}
              />

              {/* Scanning line */}
              {loading && (
                <div style={{
                  position: 'absolute', left: 0, right: 0, height: 2, top: 0,
                  background: 'linear-gradient(90deg,transparent,#3B82F6,#06B6D4,transparent)',
                  boxShadow: '0 0 14px rgba(59,130,246,0.9)',
                  animation: 'scan-line 1.5s linear infinite',
                }} />
              )}

              {/* State badge */}
              <div style={{
                position: 'absolute', top: 10, right: 10,
                background: loading ? 'rgba(59,130,246,0.85)' : 'rgba(22,163,74,0.9)',
                color: '#FFF', fontSize: 11, fontWeight: 600,
                padding: '4px 11px', borderRadius: 20,
                backdropFilter: 'blur(8px)',
                transition: 'background 0.4s ease',
              }}>
                {loading ? 'Analysing...' : 'Scan Complete'}
              </div>
            </div>
          )}

          {/* Loading text */}
          {loading && (
            <div style={{
              background: 'rgba(255,255,255,0.04)',
              backdropFilter: 'blur(16px)',
              border: '1px solid rgba(255,255,255,0.07)',
              borderRadius: 16, padding: '16px 20px', textAlign: 'center',
              animation: 'slide-up-fade 0.3s ease both',
            }}>
              <p style={{ margin: 0, fontWeight: 600, fontSize: 15, color: '#FFFFFF' }}>
                Analysing wound
                <span style={{ color: '#3B82F6', animation: 'dot-pulse 1.2s ease 0s infinite' }}>.</span>
                <span style={{ color: '#60A5FA', animation: 'dot-pulse 1.2s ease 0.2s infinite' }}>.</span>
                <span style={{ color: '#06B6D4', animation: 'dot-pulse 1.2s ease 0.4s infinite' }}>.</span>
              </p>
              <p style={{ margin: '6px 0 0', fontSize: 12, color: '#475569' }}>This may take a few seconds</p>
            </div>
          )}

          {/* Error */}
          {error && (
            <div style={{
              background: 'rgba(239,68,68,0.07)',
              border: '1px solid rgba(239,68,68,0.2)',
              borderRadius: 16, padding: '14px 16px',
              display: 'flex', alignItems: 'flex-start', gap: 10,
              animation: 'slide-up-fade 0.3s ease both',
            }}>
              <svg style={{ flexShrink: 0, marginTop: 1 }} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
              <p style={{ margin: 0, fontSize: 13, color: '#FCA5A5', fontWeight: 500 }}>{error}</p>
            </div>
          )}

          {/* Results */}
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
