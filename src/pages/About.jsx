import React from 'react'
import { useTranslation } from '../contexts/TranslationContext'
import { Heart, Users, Award, CheckCircle } from 'lucide-react'

const About = () => {
  const { t } = useTranslation()

  const values = [
    { icon: Heart, titleKey: 'about.value1_title', descKey: 'about.value1_desc' },
    { icon: Users, titleKey: 'about.value2_title', descKey: 'about.value2_desc' },
    { icon: Award, titleKey: 'about.value3_title', descKey: 'about.value3_desc' },
  ]

  const milestones = [
    { year: '1995', key: 'about.milestone1' },
    { year: '1995-2000', key: 'about.milestone2' },
    { year: '2000+', key: 'about.milestone3' },
  ]

  return (
    <div>
      {/* Hero Section */}
  <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fadeIn">
              {t('about.title', 'About Us')}
            </h1>
            <p className="text-xl animate-fadeIn" style={{ animationDelay: '0.2s' }}>
              {t('about.subtitle', 'Our Journey of Love, Friendship and Humanity')}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Welcome Message */}
            <div className="mb-12 text-center">
              <div className="inline-block p-4 bg-primary-50 rounded-full mb-6">
                <Heart className="w-12 h-12 text-primary-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                {t('home.welcome_title')}
              </h2>
              <div className="bg-primary-50 border-l-4 border-primary-600 p-6 mb-6 rounded-r-lg">
                <p className="text-lg italic text-gray-700">
                  "{t('home.founder_quote')}"
                </p>
                <p className="text-right font-semibold text-primary-700 mt-4">
                  - {t('home.founder_name')}
                </p>
              </div>
            </div>

            {/* About Content */}
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                {t('home.about_intro')}
              </p>
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                {t('home.about_registration')}
              </p>
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                {t('home.about_80g')}
              </p>
            </div>

            {/* Registration Details */}
            <div className="bg-gray-50 rounded-lg p-8 mb-12 shadow-md">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                {t('about.registration_title', 'Registration & Recognition')}
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-800">{t('about.reg_societies', 'Bombay Societies Act, 1950')}</p>
                    <p className="text-gray-600 text-sm">{t('about.reg_societies_detail', 'Registered as a Social Welfare Trust')}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-800">{t('about.reg_trust', 'Bombay Public Trust Act')}</p>
                    <p className="text-gray-600 text-sm">{t('about.reg_trust_detail', 'Registration #F23778')}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-800">{t('about.reg_80g', 'Section 80G Certificate')}</p>
                    <p className="text-gray-600 text-sm">{t('about.reg_80g_detail', 'Tax benefit for donors')}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-800">{t('about.reg_welfare', 'Social Welfare Trust')}</p>
                    <p className="text-gray-600 text-sm">{t('about.reg_welfare_detail', 'Serving communities since 1995')}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Core Values */}
            <div className="mb-12">
              <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                {t('about.core_values', 'Our Core Values')}
              </h3>
              <div className="grid md:grid-cols-3 gap-8">
                {values.map((value, index) => {
                  const Icon = value.icon
                  return (
                    <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow">
                      <div className="inline-block p-4 bg-primary-100 rounded-full mb-4">
                        <Icon className="w-8 h-8 text-primary-600" />
                      </div>
                      <h4 className="text-xl font-bold text-gray-800 mb-3">
                        {t(value.titleKey, 'Love')}
                      </h4>
                      <p className="text-gray-600">
                        {t(value.descKey, 'Spreading love across communities')}
                      </p>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Timeline */}
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                {t('about.journey', 'Our Journey')}
              </h3>
              <div className="space-y-6">
                {milestones.map((milestone, index) => (
                  <div key={index} className="flex gap-4 items-start">
                    <div className="shrink-0 w-32">
                      <div className="bg-primary-600 text-white font-bold py-3 px-4 rounded-lg text-center">
                        {milestone.year}
                      </div>
                    </div>
                    <div className="grow bg-gray-50 p-6 rounded-lg shadow-sm">
                      <p className="text-gray-700 leading-relaxed">{t(milestone.key, 'Milestone description')}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
  <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Heart className="w-12 h-12 mx-auto mb-6 text-yellow-300" />
            <blockquote className="text-2xl font-light italic mb-4">
              "{t('home.mother_teresa_quote')}"
            </blockquote>
            <cite className="text-lg not-italic font-semibold">- {t('home.mother_teresa')}</cite>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
