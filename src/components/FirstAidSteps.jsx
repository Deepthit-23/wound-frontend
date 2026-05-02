export default function FirstAidSteps({ steps }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-blue-100 overflow-hidden">
      <div className="bg-blue-50 px-6 py-4 border-b border-blue-100">
        <h3 className="text-xl font-semibold text-blue-800 flex items-center space-x-2">
          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>First Aid Instructions</span>
        </h3>
        <p className="text-blue-600 text-sm mt-1">Follow these steps carefully</p>
      </div>

      <div className="p-6">
        <ol className="space-y-4">
          {steps.map((step, i) => (
            <li key={i} className="flex items-start space-x-4 group">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-md group-hover:bg-blue-700 transition-colors duration-200">
                {i + 1}
              </div>
              <div className="flex-1 pt-1">
                <p className="text-gray-800 leading-relaxed">{step}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}