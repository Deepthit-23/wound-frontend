import { useState, useEffect } from 'react';

const SEVERITY_CONFIG = {
  mild:     { borderColor: '#16A34A', badge: { background: '#16A34A' } },
  moderate: { borderColor: '#D97706', badge: { background: '#D97706' } },
  serious:  { borderColor: '#DC2626', badge: { background: '#DC2626' } },
  none:     { borderColor: '#475569', badge: { background: '#475569' } },
};

export default function ResultCard({ result }) {
  const [barWidth, setBarWidth] = useState(0);
  const cfg = SEVERITY_CONFIG[result.severity] || SEVERITY_CONFIG.none;

  useEffect(() => {
    const t = setTimeout(() => setBarWidth(result.confidence), 80);
    return () => clearTimeout(t);
  }, [result.confidence]);

  return (
    <div style={{
      background: 'rgba(255,255,255,0.05)',
      backdropFilter: 'blur(16px)',
      border: '1px solid rgba(255,255,255,0.08)',
      borderLeft: `3px solid ${cfg.borderColor}`,
      borderRadius: 16,
      padding: '20px',
      boxShadow: '0 4px 24px rgba(0,0,0,0.3)',
      animation: 'slide-up-fade 0.4s ease both',
    }}>

      {/* Wound type + severity badge */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 18 }}>
        <h2 style={{ margin: 0, fontSize: 22, fontWeight: 800, color: '#FFFFFF' }}>
          {result.wound_type}
        </h2>
        <span style={{
          ...cfg.badge,
          color: '#FFF', fontSize: 11, fontWeight: 700,
          padding: '4px 13px', borderRadius: 50,
          textTransform: 'capitalize', letterSpacing: '0.04em',
        }}>
          {result.severity}
        </span>
      </div>

      {/* Confidence label + value */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
        <span style={{ fontSize: 12, color: '#64748B', fontWeight: 500 }}>Confidence</span>
        <span style={{ fontSize: 14, fontWeight: 700, color: '#FFFFFF' }}>{result.confidence}%</span>
      </div>

      {/* Animated progress bar */}
      <div style={{
        width: '100%', height: 6,
        background: 'rgba(255,255,255,0.08)',
        borderRadius: 50, overflow: 'hidden',
      }}>
        <div style={{
          height: '100%',
          width: `${barWidth}%`,
          background: 'linear-gradient(90deg,#3B82F6,#06B6D4)',
          borderRadius: 50,
          transition: 'width 1s ease-out',
          boxShadow: '0 0 8px rgba(59,130,246,0.6)',
        }} />
      </div>

    </div>
  );
}
