import React from 'react'
import { useTranslation } from '../contexts/TranslationContext'
import { Users, Shield, Star, Linkedin, Mail } from 'lucide-react'

// Placeholder data. Replace with real team data or fetch from an API/file.
const team = {
  core: [
    { name: 'A. Member', role: 'President', img: 'https://api.dicebear.com/7.x/initials/svg?seed=AM', email: '', linkedin: '' },
    { name: 'B. Member', role: 'Vice President', img: 'https://api.dicebear.com/7.x/initials/svg?seed=BM', email: '', linkedin: '' },
    { name: 'C. Member', role: 'General Secretary', img: 'https://api.dicebear.com/7.x/initials/svg?seed=CM', email: '', linkedin: '' },
    { name: 'D. Member', role: 'Treasurer', img: 'https://api.dicebear.com/7.x/initials/svg?seed=DM', email: '', linkedin: '' },
  ],
  advisors: [
    { name: 'E. Advisor', role: 'Advisor', img: 'https://api.dicebear.com/7.x/initials/svg?seed=EA', email: '', linkedin: '' },
    { name: 'F. Advisor', role: 'Advisor', img: 'https://api.dicebear.com/7.x/initials/svg?seed=FA', email: '', linkedin: '' },
  ],
}

const Card = ({ person }) => (
  <div className="card group hover-lift p-6 text-center">
    <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gray-100 overflow-hidden shadow ring-2 ring-primary-100">
      {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
      <img src={person.img} alt={`${person.name} photo`} className="w-full h-full object-cover" />
    </div>
    <h3 className="text-lg font-bold text-gray-800 mb-1">{person.name}</h3>
    <p className="text-sm text-primary-700 font-semibold mb-3">{person.role}</p>
    {(person.linkedin || person.email) && (
      <div className="flex items-center justify-center gap-3">
        {person.linkedin && (
          <a href={person.linkedin} target="_blank" rel="noreferrer" className="w-9 h-9 rounded-lg bg-gray-100 hover:bg-primary-600 text-gray-600 hover:text-white flex items-center justify-center transition-colors" aria-label="LinkedIn">
            <Linkedin className="w-4 h-4" />
          </a>
        )}
        {person.email && (
          <a href={`mailto:${person.email}`} className="w-9 h-9 rounded-lg bg-gray-100 hover:bg-primary-600 text-gray-600 hover:text-white flex items-center justify-center transition-colors" aria-label="Email">
            <Mail className="w-4 h-4" />
          </a>
        )}
      </div>
    )}
  </div>
)

const OurTeam = () => {
  const { t } = useTranslation()
  return (
    <div>
      {/* Hero */}
      <section className="bg-white py-12 sm:py-16">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <div className="inline-flex items-center gap-3 bg-primary-50 px-5 py-2 rounded-full mb-5 animate-fadeIn">
            <Users className="w-5 h-5 text-primary-600 animate-pulse-slow" />
            <span className="text-sm font-semibold text-primary-700">{t('ourteam.badge', 'Leadership & Volunteers')}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-700 mb-3 animate-slideInLeft">
            {t('ourteam.title', 'Our Team')}
          </h1>
          <p className="text-lg text-gray-700 animate-fadeIn" style={{ animationDelay: '0.15s' }}>
            {t('ourteam.subtitle', 'The people who nurture the spirit of Love, Friendship, and Humanity')}
          </p>
        </div>
      </section>

      {/* Core Team */}
      <section className="py-10 sm:py-14 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm mb-3">
              <Shield className="w-5 h-5 text-primary-600" />
              <span className="text-sm font-semibold text-gray-700">{t('ourteam.core_team', 'Core Team')}</span>
            </div>
            <p className="section-subtitle">{t('ourteam.core_desc', 'Guiding IPL with vision and commitment')}</p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {team.core.map((p, i) => (
              <div key={i} className="animate-scaleIn" style={{ animationDelay: `${i * 60}ms` }}>
                <Card person={p} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisors */}
      <section className="py-10 sm:py-14 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 rounded-full mb-3">
              <Star className="w-5 h-5 text-primary-600" />
              <span className="text-sm font-semibold text-primary-700">{t('ourteam.advisors', 'Advisors')}</span>
            </div>
            <p className="section-subtitle">{t('ourteam.advisors_desc', 'Supporting IPL with experience and guidance')}</p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {team.advisors.map((p, i) => (
              <div key={i} className="animate-scaleIn" style={{ animationDelay: `${i * 60}ms` }}>
                <Card person={p} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default OurTeam
