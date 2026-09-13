const TechnologyCard = ({ technology }) => {
  const {
    name,
    icon,
    badge,
    description,
    category,
    difficulty,
    rating,
  } = technology

  const brandGradient = 'bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600'

  return (
    <div className="flex flex-col h-full bg-white rounded-2xl border border-slate-200/80 p-6 shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-200">
      <div className="flex items-center justify-between">
        <div className="w-14 h-14 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center p-2.5">
          <img
            src={icon}
            alt={`${name} icon`}
            className="w-full h-full object-contain"
          />
        </div>
        <span className="px-3 py-1 rounded-full text-xs font-semibold text-slate-700 bg-slate-100 border border-slate-200">
          {badge}
        </span>
      </div>

      <div className="mt-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold text-slate-900">
            {name}
          </h3>
          <div className="flex items-center gap-1 text-sm font-semibold text-slate-700 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200/60">
            <svg className="w-4 h-4 text-amber-400 fill-amber-400" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span>{rating}</span>
          </div>
        </div>

        <p className="mt-2 text-sm text-slate-600 leading-relaxed">
          {description}
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-2">
          <span className="px-2.5 py-1 rounded-md text-xs font-medium text-slate-700 bg-slate-100">
            {category}
          </span>
          <span className="px-2.5 py-1 rounded-md text-xs font-medium text-slate-700 bg-slate-100">
            {difficulty}
          </span>
        </div>
      </div>

      <div className="mt-auto pt-6">
        <button
          type="button"
          className={`w-full py-2.5 px-4 rounded-lg text-sm font-semibold text-white ${brandGradient} shadow-xs hover:opacity-95 hover:shadow-md transition-all`}
        >
          Add to Stack
        </button>
      </div>
    </div>
  )
}

export default TechnologyCard

