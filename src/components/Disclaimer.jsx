export default function Disclaimer({ text }) {
  return (
    <footer className="mt-16 bg-amber-500/10 backdrop-blur-lg border-t border-amber-500/20">
      <div className="max-w-4xl mx-auto px-6 py-6">
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <svg className="w-8 h-8 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <div className="flex-1">
            <h4 className="text-lg font-semibold text-amber-200 mb-2">Medical Disclaimer</h4>
            <p className="text-amber-100 leading-relaxed text-lg">{text}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
