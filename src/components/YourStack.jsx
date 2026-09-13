const YourStack = ({ selectedTechnologies = [] }) => {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs">
      <div className="border-b border-slate-100 pb-3">
        <h3 className="text-lg font-bold text-slate-900">
          Your Stack
        </h3>
        <p className="text-xs text-slate-500 mt-0.5">
          {selectedTechnologies.length}{' '}
          {selectedTechnologies.length === 1
            ? 'Technology Selected'
            : 'Technologies Selected'}
        </p>
      </div>

      {selectedTechnologies.length === 0 ? (
        <div className="text-center py-10 flex flex-col items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center mb-3">
            <svg className="w-6 h-6 text-slate-400 stroke-[1.5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="m20.25 7.5-8.25 4.5-8.25-4.5L12 3l8.25 4.5Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12 12 16.5l8.25-4.5" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 16.5 12 21l8.25-4.5" />
            </svg>
          </div>
          <p className="font-semibold text-slate-800 text-sm">
            Your stack is empty
          </p>
          <p className="text-xs text-slate-400 mt-1 max-w-[190px] leading-relaxed">
            Add technologies to build your development stack.
          </p>
        </div>
      ) : (
        <div className="mt-4 space-y-2.5 max-h-[480px] overflow-y-auto pr-1">
          {selectedTechnologies.map((technology) => (
            <div
              key={technology.id}
              className="flex items-center gap-3 p-2.5 rounded-xl border border-slate-100 bg-slate-50/60"
            >
              <div className="w-8 h-8 rounded-lg bg-white border border-slate-200/70 flex items-center justify-center p-1.5 shrink-0">
                <img
                  src={technology.icon}
                  alt={`${technology.name} icon`}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="min-w-0 flex-1">
                <h4 className="text-sm font-semibold text-slate-900 truncate">
                  {technology.name}
                </h4>
                <p className="text-xs text-slate-500 truncate">
                  {technology.category}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default YourStack
