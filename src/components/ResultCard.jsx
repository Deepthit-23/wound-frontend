const SEVERITY_STYLES = {
  mild: {
    bg: 'bg-green-50 border-green-200',
    badge: 'bg-green-100 text-green-800 border border-green-300',
    icon: 'text-green-600'
  },
  moderate: {
    bg: 'bg-yellow-50 border-yellow-200',
    badge: 'bg-yellow-100 text-yellow-800 border border-yellow-300',
    icon: 'text-yellow-600'
  },
  serious: {
    bg: 'bg-red-50 border-red-200',
    badge: 'bg-red-100 text-red-800 border border-red-300',
    icon: 'text-red-600'
  },
  none: {
    bg: 'bg-gray-50 border-gray-200',
    badge: 'bg-gray-100 text-gray-800 border border-gray-300',
    icon: 'text-gray-600'
  },
};

export default function ResultCard({ result }) {
  const styles = SEVERITY_STYLES[result.severity] || SEVERITY_STYLES.none;

  return (
    <div className={`rounded-2xl border p-6 shadow-lg ${styles.bg} ${styles.border}`}>
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className={`p-2 rounded-lg ${styles.bg}`}>
            <svg className={`w-6 h-6 ${styles.icon}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800">{result.wound_type}</h2>
            <p className="text-gray-600 text-sm">Wound Classification Result</p>
          </div>
        </div>
        <span className={`text-sm font-semibold px-4 py-2 rounded-full ${styles.badge} shadow-sm`}>
          {result.severity.charAt(0).toUpperCase() + result.severity.slice(1)} Severity
        </span>
      </div>

      <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
        <div className="flex items-center justify-between">
          <span className="text-gray-700 font-medium">AI Confidence Score</span>
          <div className="flex items-center space-x-2">
            <div className="w-24 bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                style={{ width: `${result.confidence}%` }}
              ></div>
            </div>
            <span className="text-lg font-bold text-blue-700">{result.confidence}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}