const getBadgeStyle = (badge) => {
  switch (badge) {
    case 'Popular':
      return 'bg-sky-50 text-sky-500 border-sky-100'
    case 'Versatile':
      return 'bg-emerald-50 text-emerald-500 border-emerald-100'
    case 'Fast':
      return 'bg-orange-50 text-orange-500 border-orange-100'
    case 'Standard':
      return 'bg-emerald-50 text-emerald-500 border-emerald-100'
    case 'Top SQL':
      return 'bg-blue-50 text-blue-500 border-blue-100'
    case 'Cache':
      return 'bg-red-50 text-red-500 border-red-100'
    case 'Ubiquitous':
      return 'bg-amber-50 text-amber-500 border-amber-100'
    case 'Essential':
      return 'bg-sky-50 text-sky-500 border-sky-100'
    case 'Robust':
      return 'bg-sky-50 text-sky-600 border-sky-100'
    case 'Modern':
      return 'bg-cyan-50 text-cyan-500 border-cyan-100'
    case 'Containers':
      return 'bg-sky-50 text-sky-500 border-sky-100'
    case 'Developer Favorite':
      return 'bg-violet-50 text-violet-500 border-violet-100'
    case 'Flexible':
      return 'bg-emerald-50 text-emerald-500 border-emerald-100'
    default:
      return 'bg-slate-50 text-slate-500 border-slate-200'
  }
}

const TechnologyCard = ({ technology, onAdd, isAdded }) => {
  const {
    name,
    icon,
    badge,
    description,
    category,
    difficulty,
    rating,
  } = technology

  return (
    <div className="flex flex-col h-full bg-white border border-slate-200 rounded-2xl p-5 shadow-xs">
      <div className="flex items-center justify-between">
        <div className="w-12 h-12 flex items-center justify-center">
          <img
            src={icon}
            alt={`${name} icon`}
            className="w-10 h-10 object-contain"
          />
        </div>
        <span className={`inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium ${getBadgeStyle(badge)}`}>
          {badge}
        </span>
      </div>

      <div className="mt-3 flex-1 flex flex-col">
        <h3 className="text-lg font-bold text-slate-900">
          {name}
        </h3>
        <p className="mt-1.5 text-xs sm:text-sm text-slate-500 leading-relaxed">
          {description}
        </p>

        <div className="flex items-center justify-between gap-2 mt-auto pt-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span className="bg-slate-100 text-slate-500 px-2 py-1 rounded text-xs font-medium">
              {category}
            </span>
            <span>{difficulty}</span>
          </div>
          <div className="flex items-center gap-1 font-medium text-slate-700 shrink-0">
            <span className="text-amber-400">★</span>
            <span>{rating}</span>
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={() => onAdd(technology)}
        disabled={isAdded}
        className={`w-full py-2.5 rounded-lg text-sm font-medium transition-colors mt-4 ${
          isAdded
            ? 'bg-slate-200 text-slate-500 cursor-not-allowed'
            : 'bg-slate-950 text-white hover:bg-slate-800'
        }`}
      >
        {isAdded ? '✓ Added to Stack' : 'Add to Stack'}
      </button>
    </div>
  )
}

export default TechnologyCard
