const SEVERITY_STYLES = {
  mild: {
    bg: 'bg-emerald-glow/10 border-emerald-glow/20',
    badge: 'bg-emerald-glow/20 text-emerald-glow border border-emerald-glow/30',
    icon: 'text-emerald-glow',
    glow: 'shadow-emerald-glow/20'
  },
  moderate: {
    bg: 'bg-amber-glow/10 border-amber-glow/20',
    badge: 'bg-amber-glow/20 text-amber-glow border border-amber-glow/30',
    icon: 'text-amber-glow',
    glow: 'shadow-amber-glow/20'
  },
  serious: {
    bg: 'bg-rose-glow/10 border-rose-glow/20',
    badge: 'bg-rose-glow/20 text-rose-glow border border-rose-glow/30',
    icon: 'text-rose-glow',
    glow: 'shadow-rose-glow/20'
  },
  none: {
    bg: 'bg-slate-500/10 border-slate-500/20',
    badge: 'bg-slate-500/20 text-slate-400 border border-slate-500/30',
    icon: 'text-slate-400',
    glow: 'shadow-slate-500/20'
  },
};

export default function ResultCard({ result }) {
  const styles = SEVERITY_STYLES[result.severity] || SEVERITY_STYLES.none;

  return (
    <div className={`relative bg-white/5 backdrop-blur-xl border rounded-3xl p-8 shadow-2xl ${styles.bg} ${styles.border} ${styles.glow}`}>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-3xl"></div>
      <div className="relative">
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center space-x-4">
            <div className={`p-3 rounded-2xl ${styles.bg} border ${styles.border}`}>
              <svg className={`w-8 h-8 ${styles.icon}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white mb-1">{result.wound_type}</h2>
              <p className="text-slate-400 text-lg">AI Analysis Result</p>
            </div>
          </div>
          <span className={`text-sm font-semibold px-4 py-2 rounded-full ${styles.badge} shadow-lg backdrop-blur-sm`}>
            {result.severity.charAt(0).toUpperCase() + result.severity.slice(1)} Severity
          </span>
        </div>

        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
          <div className="flex items-center justify-between mb-3">
            <span className="text-white font-semibold text-lg">AI Confidence Score</span>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              {result.confidence}%
            </span>
          </div>
          <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transition-all duration-1000 ease-out shadow-lg"
              style={{ width: `${result.confidence}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}