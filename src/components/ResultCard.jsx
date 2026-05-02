const SEVERITY_COLORS = {
  mild:     'bg-green-100 text-green-800 border-green-300',
  moderate: 'bg-yellow-100 text-yellow-800 border-yellow-300',
  serious:  'bg-red-100 text-red-800 border-red-300',
  none:     'bg-gray-100 text-gray-600 border-gray-300',
};

export default function ResultCard({ result }) {
  const color = SEVERITY_COLORS[result.severity] || 'bg-gray-100';
  return (
    <div className="rounded-2xl border p-5 bg-white shadow-sm space-y-3">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold text-gray-800">{result.wound_type}</h2>
        <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${color}`}>
          {result.severity}
        </span>
      </div>
      <p className="text-sm text-gray-500">
        Confidence: <strong>{result.confidence}%</strong>
      </p>
    </div>
  );
}