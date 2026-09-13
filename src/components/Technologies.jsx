import TechnologyCard from './TechnologyCard'

const Technologies = () => {
  const brandGradient = 'bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600'

  const sampleTechnology = {
    id: 'react',
    name: 'React',
    category: 'Frontend',
    description:
      'A component-based JavaScript library for building modern user interfaces.',
    icon: 'https://icon.icepanel.io/Technology/svg/React.svg',
    rating: 4.9,
    difficulty: 'Beginner-Friendly',
    badge: 'Popular',
  }

  return (
    <section id="technologies" className="py-16 md:py-24 bg-slate-50/70 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold text-slate-700 bg-white border border-slate-200 shadow-xs mb-4">
            Explore Technologies
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Build Your{' '}
            <span className={`${brandGradient} bg-clip-text text-transparent`}>
              Developer Stack
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Explore popular tools and technologies used in modern development and choose the ones that fit your stack.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <TechnologyCard technology={sampleTechnology} />
          <TechnologyCard technology={sampleTechnology} />
          <TechnologyCard technology={sampleTechnology} />
        </div>
      </div>
    </section>
  )
}

export default Technologies
