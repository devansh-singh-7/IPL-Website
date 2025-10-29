import React from 'react'
import { useTranslation } from '../contexts/TranslationContext'
import { Heart, HandHeart, GraduationCap, Stethoscope, Users, Shirt, Home, Droplet } from 'lucide-react'

const HumanitarianServices = () => {
  const { t } = useTranslation()

  const services = [
    { icon: Stethoscope, titleKey: 'humanitarian.service1_title', descKey: 'humanitarian.service1_desc' },
    { icon: GraduationCap, titleKey: 'humanitarian.service2_title', descKey: 'humanitarian.service2_desc' },
    { icon: Shirt, titleKey: 'humanitarian.service3_title', descKey: 'humanitarian.service3_desc' },
    { icon: Home, titleKey: 'humanitarian.service4_title', descKey: 'humanitarian.service4_desc' },
    { icon: Droplet, titleKey: 'humanitarian.service5_title', descKey: 'humanitarian.service5_desc' },
    { icon: Users, titleKey: 'humanitarian.service6_title', descKey: 'humanitarian.service6_desc' },
  ]

  const activities = [
    { dateKey: 'home.activity1_date', titleKey: 'home.activity1_title', descKey: 'home.activity1_desc' },
    { dateKey: 'home.activity2_date', titleKey: 'home.activity2_title', descKey: 'home.activity2_desc' },
    { dateKey: 'home.activity3_date', titleKey: 'home.activity3_title', descKey: 'home.activity3_desc' },
  ]

  return (
    <div>
      {/* Hero Section */}
  <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block p-4 bg-white/20 backdrop-blur-sm rounded-full mb-6">
              <HandHeart className="w-16 h-16" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fadeIn">
              {t('nav.humanitarian', 'Humanitarian Services')}
            </h1>
            <p className="text-xl md:text-2xl animate-fadeIn" style={{ animationDelay: '0.2s' }}>
              {t('humanitarian.subtitle', 'Serving Humanity with Love and Compassion')}
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <Heart className="w-12 h-12 mx-auto mb-6 text-primary-600" />
            <p className="text-lg text-gray-700 leading-relaxed">
              {t('home.feature1_desc')}
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <div 
                  key={index} 
                  className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all hover:-translate-y-1 border border-gray-100"
                >
                  <div className="inline-block p-4 bg-primary-100 rounded-full mb-4">
                    <Icon className="w-8 h-8 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {t(service.titleKey, 'Service')}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {t(service.descKey, 'Description')}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Recent Activities */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">
              {t('home.recent_activities')}
            </h2>
            <p className="text-center text-gray-600 mb-12">
              {t('home.recent_subtitle')}
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {activities.map((activity, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow group"
                >
                  <div className="p-6">
                    <div className="text-sm font-semibold text-primary-600 mb-3">
                      {t(activity.dateKey)}
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-primary-600 transition-colors">
                      {t(activity.titleKey)}
                    </h3>
                    <p className="text-gray-600">{t(activity.descKey)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              {t('humanitarian.impact_title', 'Our Impact')}
            </h2>
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div className="p-6">
                <div className="text-4xl font-bold text-primary-600 mb-2">40+</div>
                <div className="text-gray-600">{t('home.stats.activities')}</div>
              </div>
              <div className="p-6">
                <div className="text-4xl font-bold text-primary-600 mb-2">30+</div>
                <div className="text-gray-600">{t('home.stats.years')}</div>
              </div>
              <div className="p-6">
                <div className="text-4xl font-bold text-primary-600 mb-2">1000+</div>
                <div className="text-gray-600">{t('humanitarian.families_helped', 'Families Helped')}</div>
              </div>
              <div className="p-6">
                <div className="text-4xl font-bold text-primary-600 mb-2">80G</div>
                <div className="text-gray-600">{t('home.stats.certificate')}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
  <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <Heart className="w-12 h-12 mx-auto mb-6 text-yellow-300" />
          <h3 className="text-3xl font-bold mb-4">
            {t('humanitarian.donate_title', 'Support Our Mission')}
          </h3>
          <p className="text-xl mb-6 max-w-2xl mx-auto">
            {t('humanitarian.donate_desc', 'Your contribution helps us serve more communities in need')}
          </p>
          <p className="text-lg opacity-90">
            {t('humanitarian.tax_benefit', 'Tax benefits available under Section 80G')}
          </p>
        </div>
      </section>
    </div>
  )
}

export default HumanitarianServices
