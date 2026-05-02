export default function FirstAidSteps({ steps }) {
  return (
    <div className="bg-[#0F172A] border border-[#334155] rounded-[32px] p-10 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
      <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-[#111827] border border-[#1F2937]">
          <svg className="w-8 h-8 text-[#38BDF8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <div>
          <h3 className="text-3xl font-bold text-white mb-2">First Aid Instructions</h3>
          <p className="text-[#94A3B8] text-lg">Follow these steps carefully for optimal care.</p>
        </div>
      </div>

        <div className="space-y-4">
          {steps.map((step, i) => (
            <div
              key={i}
              className="flex flex-col gap-4 rounded-[28px] border border-[#1E293B] bg-[#111827] p-6 transition duration-200 hover:border-[#3B82F6] sm:flex-row sm:items-start"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#0F172A] border border-[#2563EB]/30 text-[#38BDF8] font-semibold text-lg">
                {i + 1}
              </div>
              <div className="flex-1">
                <p className="text-white text-lg leading-relaxed">{step}</p>
              </div>
            </div>
          ))}
        </div>
    </div>
  );
}