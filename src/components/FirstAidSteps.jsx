export default function FirstAidSteps({ steps }) {
  return (
    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-3xl"></div>
      <div className="relative">
        <div className="flex items-center space-x-3 mb-8">
          <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl shadow-lg">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white">First Aid Instructions</h3>
            <p className="text-slate-400 text-lg">Follow these steps carefully</p>
          </div>
        </div>

        <div className="space-y-4">
          {steps.map((step, i) => (
            <div
              key={i}
              className={`flex items-start space-x-4 p-4 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl transition-all duration-500 ${
                i === 0 ? 'animate-stagger-1' :
                i === 1 ? 'animate-stagger-2' :
                i === 2 ? 'animate-stagger-3' :
                i === 3 ? 'animate-stagger-4' :
                'animate-stagger-5'
              }`}
            >
              <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                {i + 1}
              </div>
              <div className="flex-1 pt-1">
                <p className="text-white leading-relaxed text-lg">{step}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}