export default function FirstAidSteps({ steps }) {
  return (
    <div className="bg-glass-gradient backdrop-blur-xl border border-white/20 rounded-3xl p-10 shadow-2xl overflow-hidden group">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-glow/5 via-transparent to-violet-glow/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="absolute inset-0 bg-mesh-pattern opacity-20"></div>

      <div className="relative">
        <div className="flex items-center space-x-6 mb-10">
          <div className="p-4 bg-gradient-to-br from-emerald-glow to-cyan-glow rounded-3xl shadow-xl shadow-emerald-glow/30">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-white mb-2">First Aid Instructions</h3>
            <p className="text-text-light text-xl">Follow these steps carefully for optimal care</p>
          </div>
        </div>

        <div className="space-y-6">
          {steps.map((step, i) => (
            <div
              key={i}
              className={`flex items-start space-x-6 p-6 bg-glass-gradient backdrop-blur-lg border border-white/10 rounded-3xl transition-all duration-500 shadow-lg hover:shadow-xl hover:border-cyan-glow/30 ${
                i === 0 ? 'animate-stagger-1' :
                i === 1 ? 'animate-stagger-2' :
                i === 2 ? 'animate-stagger-3' :
                i === 3 ? 'animate-stagger-4' :
                'animate-stagger-5'
              }`}
            >
              <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-violet-glow to-cyan-glow rounded-2xl flex items-center justify-center text-white font-black shadow-xl text-xl">
                {i + 1}
              </div>
              <div className="flex-1 pt-2">
                <p className="text-white leading-relaxed text-lg font-medium">{step}</p>
              </div>
              <div className="flex-shrink-0">
                <div className="w-8 h-8 border-2 border-cyan-glow/50 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-cyan-glow rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}