export default function Disclaimer({ text }) {
  return (
    <footer className="mt-20 bg-glass-gradient backdrop-blur-xl border-t border-white/20 overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-r from-amber-glow/5 via-transparent to-rose-glow/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="absolute inset-0 bg-mesh-pattern opacity-20"></div>

      <div className="relative max-w-5xl mx-auto px-8 py-8">
        <div className="flex items-start space-x-6">
          <div className="flex-shrink-0">
            <div className="p-4 bg-gradient-to-br from-amber-glow to-rose-glow rounded-3xl shadow-xl shadow-amber-glow/30">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
          </div>
          <div className="flex-1">
            <h4 className="text-2xl font-bold text-amber-200 mb-3">Medical Disclaimer</h4>
            <p className="text-amber-100 leading-relaxed text-lg font-medium">{text}</p>
            <div className="mt-4 flex items-center space-x-4 text-sm text-text-muted">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-amber-glow rounded-full animate-pulse"></div>
                <span>Not a substitute for professional medical advice</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-cyan-glow rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                <span>Consult healthcare provider for serious injuries</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
