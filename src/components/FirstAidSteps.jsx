export default function FirstAidSteps({ steps }) {
  return (
    <div style={{
      background: 'rgba(255,255,255,0.05)',
      backdropFilter: 'blur(16px)',
      border: '1px solid rgba(255,255,255,0.08)',
      borderRadius: 16,
      padding: '20px',
      animation: 'slide-up-fade 0.4s ease 0.1s both',
    }}>

      {/* Section title */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
        <div style={{
          width: 32, height: 32, borderRadius: 8, flexShrink: 0,
          background: 'rgba(59,130,246,0.14)',
          border: '1px solid rgba(59,130,246,0.28)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M12 5v14M5 12h14" stroke="#3B82F6" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        </div>
        <h3 style={{ margin: 0, fontSize: 16, fontWeight: 700, color: '#FFFFFF' }}>
          First Aid Steps
        </h3>
      </div>

      {/* Step cards */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {steps.map((step, i) => (
          <div
            key={i}
            style={{
              display: 'flex', alignItems: 'flex-start', gap: 12,
              background: '#111827',
              borderRadius: 12, padding: '12px 14px',
              border: '1px solid rgba(255,255,255,0.05)',
              animation: 'slide-up-fade 0.4s ease both',
              animationDelay: `${0.12 + i * 0.08}s`,
              transition: 'background 0.2s ease',
              cursor: 'default',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = '#1a2235'; }}
            onMouseLeave={e => { e.currentTarget.style.background = '#111827'; }}
          >
            {/* Gradient number circle */}
            <div style={{
              width: 28, height: 28, borderRadius: '50%', flexShrink: 0,
              background: 'linear-gradient(135deg,#3B82F6,#06B6D4)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontWeight: 700, fontSize: 12, color: '#FFF',
              boxShadow: '0 2px 8px rgba(59,130,246,0.4)',
            }}>
              {i + 1}
            </div>
            <p style={{ margin: 0, fontSize: 13, color: '#CBD5E1', lineHeight: 1.65 }}>
              {step}
            </p>
          </div>
        ))}
      </div>

    </div>
  );
}
