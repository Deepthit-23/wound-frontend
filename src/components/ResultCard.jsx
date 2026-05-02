const SEVERITY_STYLES = {
  mild: {
    badge: 'bg-[#16A34A] text-white',
    icon: 'text-[#22C55E]'
  },
  moderate: {
    badge: 'bg-[#D97706] text-white',
    icon: 'text-[#F59E0B]'
  },
  serious: {
    badge: 'bg-[#DC2626] text-white',
    icon: 'text-[#F87171]'
  },
  none: {
    badge: 'bg-[#64748B] text-white',
    icon: 'text-[#94A3B8]'
  }
};

export default function ResultCard({ result }) {
  const styles = SEVERITY_STYLES[result.severity] || SEVERITY_STYLES.none;

  return (
    <div className="relative bg-[#0F172A] border border-[#334155] rounded-[32px] p-10 shadow-[0_20px_60px_rgba(0,0,0,0.35)] overflow-hidden">
      <div className="relative">
        <div className="flex items-start justify-between mb-8">
          <div className="flex items-center space-x-6">
            <div className="p-4 rounded-3xl bg-[#111827] border border-[#1F2937] shadow-xl">
              <svg className={`w-10 h-10 ${styles.icon}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-white mb-2">{result.wound_type}</h2>
              <p className="text-[#94A3B8] text-xl">AI analysis complete</p>
            </div>
          </div>
          <span className={`inline-flex items-center justify-center text-base font-semibold rounded-2xl px-6 py-3 ${styles.badge} shadow-sm`}>
            {result.severity.charAt(0).toUpperCase() + result.severity.slice(1)} Severity
          </span>
        </div>

        <div className="bg-[#111827] border border-[#1F2937] rounded-[28px] p-8">
          <div className="flex items-center justify-between mb-4">
            <span className="text-white font-bold text-xl">AI Confidence Score</span>
            <span className="text-4xl font-extrabold text-[#38BDF8]">{result.confidence}%</span>
          </div>
          <div className="w-full bg-white/10 rounded-2xl h-4 overflow-hidden shadow-inner">
            <div
              className="h-full rounded-full transition-all duration-1000 ease-out bg-gradient-to-r from-[#22C55E] via-[#38BDF8] to-[#0EA5E9]"
              style={{ width: `${result.confidence}%` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
            </div>
          </div>
          <div className="mt-3 flex justify-between text-sm text-[#94A3B8]">
            <span>Low</span>
            <span>High</span>
          </div>
        </div>
      </div>
    </div>
  );
}