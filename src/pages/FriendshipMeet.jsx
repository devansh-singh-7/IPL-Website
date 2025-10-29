import React from 'react'
import { useTranslation } from '../contexts/TranslationContext'
import { Users, Heart, Calendar, MapPin, Camera, Handshake } from 'lucide-react'

const FriendshipMeet = () => {
  const { t } = useTranslation()

  const highlights = [
    { icon: Users, titleKey: 'friendshipmeet.highlight1_title', descKey: 'friendshipmeet.highlight1_desc' },
    { icon: Heart, titleKey: 'friendshipmeet.highlight2_title', descKey: 'friendshipmeet.highlight2_desc' },
    { icon: Handshake, titleKey: 'friendshipmeet.highlight3_title', descKey: 'friendshipmeet.highlight3_desc' },
    { icon: Camera, titleKey: 'friendshipmeet.highlight4_title', descKey: 'friendshipmeet.highlight4_desc' },
  ]

  return (
    <div>
      {/* Hero Section */}
  <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block p-4 bg-white/20 backdrop-blur-sm rounded-full mb-6">
              <Users className="w-16 h-16" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fadeIn">
              {t('nav.meet', 'Friendship Meet')}
            </h1>
            <p className="text-xl md:text-2xl animate-fadeIn" style={{ animationDelay: '0.2s' }}>
              {t('friendshipmeet.subtitle', 'Where Letters Transform into Lasting Bonds')}
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Heart className="w-12 h-12 mx-auto mb-6 text-primary-600" />
              <p className="text-lg text-gray-700 leading-relaxed">
                {t('home.feature2_desc')}
              </p>
            </div>

            {/* Highlights */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {highlights.map((highlight, index) => {
                const Icon = highlight.icon
                return (
                  <div 
                    key={index}
                    className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all border border-gray-200"
                  >
                    <div className="flex items-start gap-4">
                      <div className="shrink-0 p-3 bg-white rounded-lg shadow-sm">
                        <Icon className="w-8 h-8 text-primary-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">
                          {t(highlight.titleKey, 'Highlight')}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {t(highlight.descKey, 'Description')}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              {t('friendshipmeet.what_to_expect', 'What to Expect')}
            </h2>

            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-md flex items-start gap-4">
                <div className="shrink-0 w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                  <span className="text-primary-600 font-bold text-xl">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {t('friendshipmeet.expect1_title', 'Meet Your Pen Friends')}
                  </h3>
                  <p className="text-gray-600">
                    {t('friendshipmeet.expect1_desc', 'Finally meet the friends you have been corresponding with through letters')}
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md flex items-start gap-4">
                <div className="shrink-0 w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                  <span className="text-primary-600 font-bold text-xl">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {t('friendshipmeet.expect2_title', 'Cultural Exchange')}
                  </h3>
                  <p className="text-gray-600">
                    {t('friendshipmeet.expect2_desc', 'Experience diverse cultures and traditions from across India')}
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md flex items-start gap-4">
                <div className="shrink-0 w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                  <span className="text-primary-600 font-bold text-xl">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {t('friendshipmeet.expect3_title', 'Activities & Events')}
                  </h3>
                  <p className="text-gray-600">
                    {t('friendshipmeet.expect3_desc', 'Participate in various activities designed to strengthen bonds')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
  <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <Handshake className="w-12 h-12 mx-auto mb-6 text-yellow-300" />
          <h3 className="text-3xl font-bold mb-4">
            {t('friendshipmeet.join_title', 'Join Our Next Friendship Meet')}
          </h3>
          <p className="text-xl mb-6 max-w-2xl mx-auto">
            {t('friendshipmeet.join_desc', 'Experience the joy of meeting friends who share your passion for friendship and humanity')}
          </p>
        </div>
      </section>
    </div>
  )
}

export default FriendshipMeet
