import React, { useState, useRef } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useTranslation } from '../contexts/TranslationContext'
import { Menu, X, Search, ChevronDown } from 'lucide-react'

type Props = Record<string, never>
type NavLink = {
  path: string
  label: string
  hasDropdown?: boolean
  dropdownItems?: { path: string; label: string }[]
}

const Header: React.FC<Props> = () => {
  const { lang, toggleLanguage, t } = useTranslation()
  const location = useLocation()
  const navigate = useNavigate()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [newsDropdownOpen, setNewsDropdownOpen] = useState(false)
  const [query, setQuery] = useState('')
  const desktopSearchRef = useRef<HTMLInputElement | null>(null)

  const navLinks: NavLink[] = [
    { path: '/', label: 'nav.home' },
    { path: '/about', label: 'nav.about' },
    { path: '/our-team', label: 'nav.team' },
    { path: '/humanitarian-services', label: 'nav.humanitarian' },
    {
      path: '/news-events',
      label: 'nav.news',
      hasDropdown: true,
      dropdownItems: [
        { path: '/news-events', label: 'IPL News' },
        { path: '/friendship-meet', label: 'nav.meet' },
        { path: '/friends-day', label: 'nav.friendsDay' },
      ],
    },
    { path: '/contact', label: 'nav.contact' },
  ] as const

  const isActive = (path: string) => location.pathname === path

  const isNewsActive = () => {
    return (
      location.pathname === '/news-events' ||
      location.pathname === '/friendship-meet' ||
      location.pathname === '/friends-day'
    )
  }

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2 md:gap-4 flex-1 md:flex-initial">
          <Link
            to="/"
            className="text-primary-700 font-extrabold text-lg sm:text-xl md:text-2xl leading-none hover:text-primary-800 transition-colors duration-200 truncate"
          >
            {t('home.hero_title', "Indian Penpals' League")}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 ml-8">
            {navLinks.map((link, index) =>
              link.hasDropdown ? (
                <div
                  key={link.path}
                  className="relative"
                  onMouseEnter={() => setNewsDropdownOpen(true)}
                  onMouseLeave={() => setNewsDropdownOpen(false)}
                >
                  <button
                    className={`
                      nav-link relative px-3 py-2 text-sm font-medium leading-none rounded-lg flex items-center gap-1
                      ${isNewsActive() ? 'text-primary-700' : 'text-gray-700'}
                      group
                      hover:scale-105 hover:-translate-y-0.5
                      active:scale-95
                      transition-all duration-200
                    `}
                  >
                    <span className="relative z-10">{t(link.label as string)}</span>
                    <ChevronDown
                      className={`w-3 h-3 transition-transform duration-200 ${
                        newsDropdownOpen ? 'rotate-180' : ''
                      }`}
                    />

                    {/* Animated underline for active state */}
                    <span
                      className={`
                        absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-linear-to-r from-primary-500 to-primary-600 transition-all duration-300 rounded-full
                        ${isNewsActive() ? 'w-3/4' : 'w-0'}
                      `}
                    />
                  </button>

                  {/* Dropdown Menu */}
                  <div
                    className={`
                      absolute top-full left-0 mt-1 w-48 bg-gray-800 rounded-lg shadow-xl overflow-hidden
                      transition-all duration-200 origin-top
                      ${newsDropdownOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}
                    `}
                  >
                    {link.dropdownItems?.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className={`
                          block px-4 py-3 text-sm font-medium
                          ${isActive(item.path) ? 'bg-primary-600 text-white' : 'text-white hover:bg-gray-700'}
                          transition-colors duration-150
                        `}
                        onClick={() => setNewsDropdownOpen(false)}
                      >
                        {item.label.startsWith('nav.') ? t(item.label) : item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`
                    nav-link relative px-3 py-2 text-sm font-medium leading-none rounded-lg
                    ${isActive(link.path) ? 'text-primary-700' : 'text-gray-700'}
                    group
                    hover:scale-105 hover:-translate-y-0.5
                    active:scale-95
                  `}
                >
                  <span className="relative z-10">{t(link.label as string)}</span>

                  {/* Animated underline for active state */}
                  <span
                    className={`
                      absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-linear-to-r from-primary-500 to-primary-600 transition-all duration-300 rounded-full
                      ${isActive(link.path) ? 'w-3/4' : 'w-0'}
                    `}
                  />
                </Link>
              ),
            )}
          </nav>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
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
            className="hidden lg:flex items-center group relative"
          >
            <Search className="absolute left-3 w-4 h-4 text-gray-400 group-focus-within:text-primary-600 transition-colors" />
            <input
              ref={desktopSearchRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t('header.search_placeholder', 'Search...')}
              className="w-32 focus:w-48 xl:w-40 xl:focus:w-64 pl-9 pr-3 py-2 rounded-lg bg-gray-50 border border-gray-200 text-sm text-gray-700 outline-none transition-all duration-300 focus:bg-white focus:border-primary-500 focus:ring-2 focus:ring-primary-200 shadow-sm focus:shadow-md"
            />
          </form>

          {/* Language Toggle with Animation */}
          <button
            aria-label="Toggle language"
            title={lang === 'en' ? 'Switch to Hindi' : lang === 'hi' ? 'Switch to Tamil' : 'Switch to English'}
            onClick={toggleLanguage}
            className="
              lang-toggle relative overflow-hidden
              px-3 sm:px-4 py-2 rounded-lg border-2 border-primary-700 bg-white text-primary-700
              font-bold text-xs sm:text-sm shadow-sm
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
            className="lg:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100 transition-colors"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`
          lg:hidden overflow-hidden transition-all duration-300 ease-in-out
          ${mobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}
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
          {navLinks.map((link, index) =>
            link.hasDropdown ? (
              <div key={link.path} className="space-y-1">
                <div className="px-4 py-2 text-xs font-bold text-gray-500 uppercase tracking-wider">
                  {t(link.label as string)}
                </div>
                {link.dropdownItems?.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`
                      block px-4 py-3 rounded-lg text-sm font-medium ml-4
                      transition-all duration-300
                      ${isActive(item.path)
                        ? 'bg-primary-600 text-white shadow-md'
                        : 'bg-gray-50 text-gray-700 hover:bg-primary-50 hover:text-primary-600 hover:translate-x-2'
                      }
                    `}
                  >
                    {item.label.startsWith('nav.') ? t(item.label) : item.label}
                  </Link>
                ))}
              </div>
            ) : (
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
                  animation: mobileMenuOpen ? 'slideInLeft 0.3s ease-out forwards' : 'none',
                }}
              >
                {t(link.label as string)}
              </Link>
            ),
          )}
        </nav>
      </div>
    </header>
  )
}

export default Header
