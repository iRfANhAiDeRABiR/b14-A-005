import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Technologies', href: '#technologies' },
    { name: 'Projects', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ]

  const brandGradient = 'bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600'

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-xs border-b border-slate-100 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-hidden transition-colors"
            aria-label="Toggle mobile menu"
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>

          <a href="#" className="flex items-center">
            <img
              src="/logo-text.png"
              alt="Dev Stack"
              className="h-8 w-auto object-contain"
            />
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            <a
              href="#signin"
              className="text-xs sm:text-sm font-medium text-slate-700 hover:text-slate-900 px-2 sm:px-3 py-1.5 transition-colors"
            >
              Sign In
            </a>
            <a
              href="#signup"
              className={`text-xs sm:text-sm font-medium text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full ${brandGradient} hover:opacity-90 transition-opacity shadow-xs`}
            >
              Sign Up
            </a>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white px-4 pt-2 pb-4 space-y-1 shadow-md">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
