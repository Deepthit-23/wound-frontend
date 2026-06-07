export default function Disclaimer({ text }) {
  return (
    <div style={{
      background: 'rgba(245,158,11,0.06)',
      border: '1px solid rgba(245,158,11,0.14)',
      borderLeft: '3px solid rgba(245,158,11,0.55)',
      borderRadius: 12,
      padding: '12px 14px',
      display: 'flex', alignItems: 'flex-start', gap: 10,
      animation: 'slide-up-fade 0.4s ease 0.2s both',
    }}>
      <svg style={{ flexShrink: 0, marginTop: 1 }} width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
      </svg>
      <p style={{ margin: 0, fontSize: 12, color: '#94A3B8', fontStyle: 'italic', lineHeight: 1.55 }}>
        {text}
      </p>
    </div>
  );
}
