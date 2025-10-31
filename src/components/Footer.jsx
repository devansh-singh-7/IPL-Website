import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from '../contexts/TranslationContext'
import {
  Mail,
  Phone,
  MapPin,
  Heart,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ArrowRight
} from 'lucide-react'

const Footer = () => {
  const { t } = useTranslation()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 mt-16 text-gray-300">
      <div className="container mx-auto px-8">
        {/* GRID SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 py-16">
          
          {/* LEFT COLUMN: QUICK LINKS */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              {t('footer.quick_links', 'Quick Links')}
            </h4>
            <ul className="space-y-3">
              {[
                { to: '/', label: t('nav.home', 'Home') },
                { to: '/about', label: t('nav.about', 'About') },
                { to: '/our-team', label: t('nav.team', 'Our Team') },
                { to: '/humanitarian-services', label: t('nav.humanitarian', 'Humanitarian Services') },
                { to: '/friendship-meet', label: t('nav.meet', 'Friendship Meet') },
                { to: '/friends-day', label: t('nav.friendsDay', 'Friends Day') },
                { to: '/news-events', label: t('nav.news', 'News & Events') },
                { to: '/contact', label: t('nav.contact', 'Contact') },
              ].map(link => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-gray-300 hover:text-primary-400 transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CENTER COLUMN: BRAND / HEART / SOCIALS */}
          <div className="flex flex-col items-center justify-center text-center mx-auto w-full max-w-sm">
            <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center mb-3">
              <Heart className="w-6 h-6 text-white fill-white" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">
              {t('brand.name', "Indian Penpals' League")}
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              {t('footer.about_text', 'Love, Friendship & Humanity — A confederation of friends united to serve communities.')}
            </p>

            <div className="flex gap-3 mt-5 justify-center">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-primary-600 text-gray-400 hover:text-white flex items-center justify-center transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN: CONTACT DETAILS (FLUSH RIGHT) */}
          <div className="flex flex-col items-center md:items-end text-center md:text-right">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              {t('footer.contact_us', 'Contact Us')}
            </h4>
            <div className="space-y-4 w-full max-w-xs md:max-w-sm lg:max-w-md ml-auto">
              
              {/* ADDRESS */}
              <div className="flex items-center gap-2 justify-center md:justify-end">
                <div className="w-9 h-9 bg-slate-800 rounded-lg flex items-center justify-center shrink-0">
                  <MapPin className="w-4.5 h-4.5 text-white" />
                </div>
                <p className="text-sm text-gray-300 leading-relaxed text-left md:text-right">
                  {t('footer.address', `103, Starview Apts., Opp. Corporate Park,\nV.N.Purav Marg, Chembur,\nMumbai - 400071, India`).split('\n').map((line, i) => (
                    <React.Fragment key={i}>{line}{i < 2 && <br />}</React.Fragment>
                  ))}
                </p>
              </div>

              {/* PHONE */}
              <div className="flex items-center gap-2 justify-center md:justify-end">
                <div className="w-9 h-9 bg-slate-800 rounded-lg flex items-center justify-center shrink-0">
                  <Phone className="w-4.5 h-4.5 text-white" />
                </div>
                <a
                  href="tel:+919892035187"
                  className="text-sm text-gray-300 hover:text-primary-400 transition-colors text-left md:text-right"
                >
                  +91 9892035187
                </a>
              </div>

              {/* EMAIL */}
              <div className="flex items-center gap-2 justify-center md:justify-end">
                <div className="w-9 h-9 bg-slate-800 rounded-lg flex items-center justify-center shrink-0">
                  <Mail className="w-4.5 h-4.5 text-white" />
                </div>
                <a
                  href="mailto:iplmumbai12395@gmail.com"
                  className="text-sm text-gray-300 hover:text-primary-400 transition-colors md:max-w-[230px] text-left md:text-right wrap-break-word"
                >
                  iplmumbai12395@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-slate-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs sm:text-sm text-gray-400 text-center md:text-left">
              © {currentYear} Indian Penpals' League. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-xs sm:text-sm">
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                {t('footer.privacy', 'Privacy Policy')}
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                {t('footer.terms', 'Terms of Service')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
