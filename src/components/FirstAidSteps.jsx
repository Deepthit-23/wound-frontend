export default function FirstAidSteps({ steps }) {
  return (
    <div className="rounded-2xl border p-5 bg-white shadow-sm">
      <h3 className="font-bold text-gray-800 mb-3">First Aid Steps</h3>
      <ol className="space-y-2">
        {steps.map((step, i) => (
          <li key={i} className="flex gap-3 text-sm text-gray-700">
            <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
              {i + 1}
            </span>
            {step}
          </li>
        ))}
      </ol>
    </div>
  );
}