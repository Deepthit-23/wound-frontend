const SEVERITY_BADGE = {
  mild:     'border-green-400 text-green-600 bg-green-50',
  moderate: 'border-yellow-400 text-yellow-600 bg-yellow-50',
  serious:  'border-red-400 text-red-600 bg-red-50',
  none:     'border-slate-300 text-slate-500 bg-slate-50',
};

export default function ResultCard({ result }) {
  const badge = SEVERITY_BADGE[result.severity] || SEVERITY_BADGE.none;

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-xl font-bold text-slate-800">{result.wound_type}</h2>
        <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${badge}`}>
          {result.severity}
        </span>
      </div>

      <p className="text-sm text-slate-500 mb-3">Confidence: {result.confidence}%</p>

      <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
        <div
          className="h-full rounded-full bg-[#2563EB] transition-all duration-700"
          style={{ width: `${result.confidence}%` }}
        />
      </div>
    </div>
  );
}
