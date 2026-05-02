export default function Disclaimer({ text }) {
  return (
    <footer className="mt-16 px-6 py-10">
      <div className="mx-auto max-w-5xl rounded-[32px] border border-[rgba(255,255,255,0.08)] bg-[#0E1726] p-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-start">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#111827]">
            <svg className="h-7 w-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <div>
            <h4 className="text-2xl font-semibold text-white">Medical Disclaimer</h4>
            <p className="mt-3 text-[#94A3B8] text-base leading-7">{text}</p>
            <div className="mt-5 flex flex-col gap-3 text-sm text-[#CBD5E1] md:flex-row md:items-center">
              <span className="rounded-full border border-[#1F2937] bg-[#111827] px-4 py-2">Not a substitute for professional medical advice</span>
              <span className="rounded-full border border-[#1F2937] bg-[#111827] px-4 py-2">Consult a healthcare provider for serious injuries</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
