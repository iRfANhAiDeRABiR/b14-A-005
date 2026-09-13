export default function Hero() {
  const brandGradient = 'bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600'

  return (
    <section className="relative overflow-hidden bg-white py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Discover the Tools That Power{' '}
              <span className={`${brandGradient} bg-clip-text text-transparent`}>
                Modern Development
              </span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed">
              Explore popular technologies, compare developer tools, and build a stack that fits the way you want to create modern applications.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <a
                href="#technologies"
                className={`w-full sm:w-auto text-center px-7 py-3.5 rounded-lg text-white text-sm sm:text-base font-semibold ${brandGradient} shadow-md hover:shadow-lg hover:opacity-95 transition-all`}
              >
                Explore Technologies
              </a>

              <a
                href="#about"
                className="w-full sm:w-auto text-center px-7 py-3.5 rounded-lg text-slate-700 text-sm sm:text-base font-semibold bg-white border border-slate-200 hover:bg-slate-50 hover:text-slate-900 hover:border-slate-300 transition-colors"
              >
                Learn More
              </a>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <img
              src="/banner-stack.png"
              alt="Developer tools and modern technologies stack"
              className="w-full max-w-md lg:max-w-lg xl:max-w-xl h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
