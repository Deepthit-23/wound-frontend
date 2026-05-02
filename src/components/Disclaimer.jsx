export default function Disclaimer({ text }) {
  return (
    <footer className="bg-amber-50 border-t-4 border-amber-400 mt-8">
      <div className="max-w-4xl mx-auto px-4 py-6">
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <div className="flex-1">
            <h4 className="text-lg font-semibold text-amber-800 mb-2">Medical Disclaimer</h4>
            <p className="text-amber-700 leading-relaxed">{text}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
