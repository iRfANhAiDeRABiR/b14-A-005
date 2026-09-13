import { useState, useEffect } from 'react'
import TechnologyCard from './TechnologyCard'

const Technologies = () => {
  const [technologies, setTechnologies] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const brandGradient = 'bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600'

  useEffect(() => {
    fetch('/technologies.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to load technologies.')
        }
        return response.json()
      })
      .then((data) => {
        setTechnologies(data)
      })
      .catch((err) => {
        setError(err.message || 'Failed to load technologies.')
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  return (
    <section id="technologies" className="py-16 md:py-24 bg-slate-50/70 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Explore the{' '}
            <span className={`${brandGradient} bg-clip-text text-transparent`}>
              Technologies
            </span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-16 gap-3">
            <div className="w-10 h-10 border-4 border-slate-200 border-t-orange-500 rounded-full animate-spin" />
            <p className="text-slate-500 font-medium">Loading technologies...</p>
          </div>
        ) : error ? (
          <div className="text-center py-16 text-rose-500 font-medium">
            {error}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {technologies.map((technology) => (
              <TechnologyCard
                key={technology.id}
                technology={technology}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default Technologies
