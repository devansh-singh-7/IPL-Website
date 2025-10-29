import React, { useState, useRef } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useTranslation } from '../contexts/TranslationContext'
import { Menu, X, Search } from 'lucide-react'

const Header = () => {
  const { lang, toggleLanguage, t } = useTranslation()
  const location = useLocation()
  const navigate = useNavigate()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [query, setQuery] = useState('')
  const desktopSearchRef = useRef(null)

  const navLinks = [
    { path: '/', label: 'nav.home' },
    { path: '/about', label: 'nav.about' },
    { path: '/humanitarian-services', label: 'nav.humanitarian' },
    { path: '/news-events', label: 'nav.news' },
    { path: '/friendship-meet', label: 'nav.meet' },
    { path: '/friends-day', label: 'nav.friendsDay' },
    { path: '/contact', label: 'nav.contact' },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link 
            to="/" 
            className="text-primary-700 font-extrabold text-2xl leading-none hover:text-primary-800 transition-colors duration-200"
          >
            {t('home.hero_title', "Indian Penpals' League")}
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 ml-8">
            {navLinks.map((link, index) => (
              <Link
                key={link.path}
                to={link.path}
                className={`
                  nav-link relative px-3 py-2 text-sm font-medium leading-none rounded-lg
                  ${isActive(link.path)
                    ? 'text-primary-700'
                    : 'text-gray-700'}
                  group
                  hover:scale-105 hover:-translate-y-0.5
                  active:scale-95
                `}
              >
                <span className="relative z-10">{t(link.label)}</span>
                
                {/* Animated underline for active state */}
                <span 
                  className={`
                    absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-linear-to-r from-primary-500 to-primary-600 transition-all duration-300 rounded-full
                    ${isActive(link.path) 
                      ? 'w-3/4' 
                      : 'w-0'}
                  `}
                />

              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-3">
          {/* Desktop Search */}
          <form
            onSubmit={(e) => {
              e.preventDefault()
              const q = query.trim()
              if (q) {
                navigate(`/news-events?q=${encodeURIComponent(q)}`)
                setMobileMenuOpen(false)
              }
            }}
            className="hidden md:flex items-center group relative"
          >
            <Search className="absolute left-3 w-4 h-4 text-gray-400 group-focus-within:text-primary-600 transition-colors" />
            <input
              ref={desktopSearchRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t('header.search_placeholder', 'Search...')}
              className="w-40 focus:w-64 pl-9 pr-3 py-2 rounded-lg bg-gray-50 border border-gray-200 text-sm text-gray-700 outline-none transition-all duration-300 focus:bg-white focus:border-primary-500 focus:ring-2 focus:ring-primary-200 shadow-sm focus:shadow-md"
            />
          </form>

          {/* Language Toggle with Animation */}
          <button
            aria-label="Toggle language"
            title={lang === 'en' ? 'Switch to Hindi' : lang === 'hi' ? 'Switch to Tamil' : 'Switch to English'}
            onClick={toggleLanguage}
            className="
              lang-toggle relative overflow-hidden
              px-4 py-2 rounded-lg border-2 border-primary-600 bg-white text-primary-600
              font-bold text-sm shadow-sm
              hover:bg-primary-700 hover:text-white hover:shadow-lg hover:border-primary-800
              active:scale-95
              transition-all duration-300
              transform hover:scale-105 hover:rotate-1
              group
            "
          >
            <span className="relative z-10 transition-transform duration-300 group-hover:scale-110 inline-block">
              {lang === 'en' ? t('header.lang_en') : lang === 'hi' ? t('header.lang_hi') : t('header.lang_ta')}
            </span>
            {/* Shimmer effect */}
            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-linear-to-r from-transparent via-white/30 to-transparent" />
          </button>

          {/* Mobile menu toggle */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100 transition-colors"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div 
        className={`
          md:hidden overflow-hidden transition-all duration-300 ease-in-out
          ${mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
        `}
      >
        <div className="container mx-auto px-4 pb-3 pt-2">
          {/* Mobile Search */}
          <form
            onSubmit={(e) => {
              e.preventDefault()
              const q = query.trim()
              if (q) {
                navigate(`/news-events?q=${encodeURIComponent(q)}`)
                setMobileMenuOpen(false)
              }
            }}
            className="flex items-center gap-2"
          >
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={t('header.search_placeholder', 'Search...')}
                className="w-full pl-9 pr-3 py-2 rounded-lg bg-gray-50 border border-gray-200 text-sm text-gray-700 outline-none transition-all duration-300 focus:bg-white focus:border-primary-500 focus:ring-2 focus:ring-primary-200"
              />
            </div>
          </form>
        </div>
        <nav className="container mx-auto px-4 pb-4 space-y-1">
          {navLinks.map((link, index) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className={`
                block px-4 py-3 rounded-lg text-sm font-medium
                transition-all duration-300
                ${isActive(link.path)
                  ? 'bg-primary-600 text-white shadow-md'
                  : 'bg-gray-50 text-gray-700 hover:bg-primary-50 hover:text-primary-600 hover:translate-x-2'
                }
              `}
              style={{ 
                animationDelay: `${index * 50}ms`,
                animation: mobileMenuOpen ? 'slideInLeft 0.3s ease-out forwards' : 'none'
              }}
            >
              {t(link.label)}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Header
