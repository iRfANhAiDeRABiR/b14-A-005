import { useState, useEffect } from 'react'
import TechnologyCard from './TechnologyCard'
import YourStack from './YourStack'

const Technologies = () => {
  const [technologies, setTechnologies] = useState([])
  const [selectedTechnologies, setSelectedTechnologies] = useState([])
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

  const handleAddToStack = (technology) => {
    const alreadyAdded = selectedTechnologies.some(
      (item) => item.id === technology.id
    )

    if (!alreadyAdded) {
      setSelectedTechnologies((previous) => [...previous, technology])
    }
  }

  return (
    <section id="technologies" className="pt-16 md:pt-20 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 md:mb-10 text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Explore the{' '}
            <span className={`${brandGradient} bg-clip-text text-transparent`}>
              Technologies
            </span>
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-500">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-6 items-start">
          <div className="min-w-0">
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
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                {technologies.map((technology) => {
                  const isAdded = selectedTechnologies.some(
                    (item) => item.id === technology.id
                  )

                  return (
                    <TechnologyCard
                      key={technology.id}
                      technology={technology}
                      onAdd={handleAddToStack}
                      isAdded={isAdded}
                    />
                  )
                })}
              </div>
            )}
          </div>

          <div className="lg:sticky lg:top-24 self-start">
            <YourStack selectedTechnologies={selectedTechnologies} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Technologies
