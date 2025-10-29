import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from '../contexts/TranslationContext'
import { Mail, Phone, MapPin, Heart, Facebook, Twitter, Instagram, Linkedin, ArrowRight } from 'lucide-react'

const Footer = () => {
  const { t } = useTranslation()
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-slate-900 mt-20">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* About Section */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
                <Heart className="w-6 h-6 text-white fill-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Indian Penpals' League</h3>
              </div>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed mb-4">
              {t('footer.about_text', 'Love, Friendship & Humanity - A confederation of friends united to serve communities.')}
            </p>
            
            {/* Social Media */}
            <div className="flex gap-2 mt-6">
              <a 
                href="#" 
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-primary-600 text-gray-400 hover:text-white flex items-center justify-center transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-primary-600 text-gray-400 hover:text-white flex items-center justify-center transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-primary-600 text-gray-400 hover:text-white flex items-center justify-center transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-primary-600 text-gray-400 hover:text-white flex items-center justify-center transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { to: '/', label: t('nav.home') },
                { to: '/about', label: t('nav.about') },
                { to: '/humanitarian-services', label: t('nav.humanitarian') },
                { to: '/friendship-meet', label: t('nav.meet') },
                { to: '/friends-day', label: t('nav.friendsDay') },
                { to: '/news-events', label: t('nav.news') },
                { to: '/contact', label: t('nav.contact') }
              ].map((link) => (
                <li key={link.to}>
                  <Link 
                    to={link.to}
                    className="text-sm text-gray-300 hover:text-primary-400 transition-colors inline-flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    103, Starview Apts., Opp. Corporate Park,<br />
                    V.N.Purav Marg, Chembur,<br />
                    Mumbai - 400071, India
                  </p>
                </div>
              </div>
              
              <a 
                href="tel:+919892035187"
                className="flex items-center gap-3 group"
              >
                <div className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-primary-600 transition-colors">
                  <Phone className="w-4 h-4 text-white group-hover:text-white transition-colors" />
                </div>
                <span className="text-sm text-gray-300 group-hover:text-primary-400 transition-colors">+91 9892035187</span>
              </a>
              
              <a 
                href="mailto:iplmumbai12395@gmail.com"
                className="flex items-start gap-3 group"
              >
                <div className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-primary-600 transition-colors">
                  <Mail className="w-4 h-4 text-white group-hover:text-white transition-colors" />
                </div>
                <span className="text-sm text-gray-300 group-hover:text-primary-400 transition-colors break-all">iplmumbai12395@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © {currentYear} Indian Penpals' League. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
