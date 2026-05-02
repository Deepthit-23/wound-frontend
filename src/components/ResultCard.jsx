const SEVERITY_STYLES = {
  mild: {
    bg: 'bg-emerald-glow/10 border-emerald-glow/20',
    badge: 'bg-emerald-glow text-white border border-emerald-glow/30',
    icon: 'text-emerald-glow',
    glow: 'shadow-emerald-glow/20'
  },
  moderate: {
    bg: 'bg-amber-glow/10 border-amber-glow/20',
    badge: 'bg-amber-glow text-white border border-amber-glow/30',
    icon: 'text-amber-glow',
    glow: 'shadow-amber-glow/20'
  },
  serious: {
    bg: 'bg-rose-glow/10 border-rose-glow/20',
    badge: 'bg-rose-glow text-white border border-rose-glow/30',
    icon: 'text-rose-glow',
    glow: 'shadow-rose-glow/20'
  },
  none: {
    bg: 'bg-slate-500/10 border-slate-500/20',
    badge: 'bg-slate-500 text-white border border-slate-500/30',
    icon: 'text-slate-400',
    glow: 'shadow-slate-500/20'
  },
};

export default function ResultCard({ result }) {
  const styles = SEVERITY_STYLES[result.severity] || SEVERITY_STYLES.none;

  return (
    <div className={`relative bg-glass-gradient backdrop-blur-xl border rounded-3xl p-10 shadow-2xl ${styles.bg} ${styles.border} ${styles.glow} overflow-hidden group`}>
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-glow/5 via-transparent to-cyan-glow/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* Subtle mesh pattern */}
      <div className="absolute inset-0 bg-mesh-pattern opacity-20"></div>

      <div className="relative">
        <div className="flex items-start justify-between mb-8">
          <div className="flex items-center space-x-6">
            <div className={`p-4 rounded-3xl ${styles.bg} border ${styles.border} shadow-xl backdrop-blur-sm`}>
              <svg className={`w-10 h-10 ${styles.icon}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-white mb-2">{result.wound_type}</h2>
              <p className="text-text-light text-xl">AI Analysis Complete</p>
            </div>
          </div>
          <span className={`text-base font-bold px-6 py-3 rounded-2xl ${styles.badge} shadow-xl backdrop-blur-sm border border-white/20`}>
            {result.severity.charAt(0).toUpperCase() + result.severity.slice(1)} Severity
          </span>
        </div>

        <div className="bg-glass-gradient backdrop-blur-lg rounded-3xl p-8 border border-white/10 shadow-inner">
          <div className="flex items-center justify-between mb-4">
            <span className="text-white font-bold text-xl">AI Confidence Score</span>
            <span className="text-4xl font-black bg-gradient-to-r from-violet-glow to-cyan-glow bg-clip-text text-transparent">
              {result.confidence}%
            </span>
          </div>
          <div className="w-full bg-white/10 rounded-2xl h-4 overflow-hidden shadow-inner">
            <div
              className="h-full bg-gradient-to-r from-violet-glow via-cyan-glow to-blue-400 rounded-2xl transition-all duration-1000 ease-out shadow-lg relative overflow-hidden"
              style={{ width: `${result.confidence}%` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
            </div>
          </div>
          <div className="flex justify-between text-sm text-text-muted mt-2">
            <span>Low</span>
            <span>High</span>
          </div>
        </div>
      </div>
    </div>
  );
}