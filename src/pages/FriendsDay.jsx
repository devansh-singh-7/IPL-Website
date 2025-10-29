import React from 'react'
import { useTranslation } from '../contexts/TranslationContext'
import { Calendar, Heart, Gift, Users, Sparkles } from 'lucide-react'

const FriendsDay = () => {
  const { t } = useTranslation()

  return (
    <div>
      {/* Hero Section */}
  <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block p-4 bg-white/20 backdrop-blur-sm rounded-full mb-6">
              <Calendar className="w-16 h-16" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fadeIn">
              {t('nav.friendsDay', 'Friends Day')}
            </h1>
            <p className="text-xl md:text-2xl mb-4 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
              {t('friendsday.subtitle', 'Celebrating March 12 - A Monument to Friendship')}
            </p>
            <p className="text-lg opacity-90 animate-fadeIn" style={{ animationDelay: '0.3s' }}>
              {t('friendsday.date', 'Established March 12, 1995')}
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Heart className="w-12 h-12 mx-auto mb-6 text-primary-600 animate-pulse-slow" />
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {t('home.feature3_desc')}
              </p>
            </div>

            {/* Why March 12 */}
            <div className="bg-white rounded-lg p-8 mb-12 border border-gray-200 shadow-sm">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                {t('friendsday.why_march12', 'Why March 12?')}
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg text-center">
                {t('friendsday.why_desc', 'March 12, 1995 marks the day when Indian Penpals League was founded in Mumbai. This historic day represents the beginning of a movement that transcends barriers of caste, religion, and geography, uniting people through the power of friendship.')}
              </p>
            </div>

            {/* Celebration Highlights */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-primary-600">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 p-3 bg-primary-100 rounded-lg">
                    <Users className="w-8 h-8 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {t('friendsday.celebration1_title', 'Grand Celebrations')}
                    </h3>
                    <p className="text-gray-600">
                      {t('friendsday.celebration1_desc', 'Celebrated annually with great enthusiasm across all IPL chapters')}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-primary-600">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 p-3 bg-primary-50 rounded-lg">
                    <Heart className="w-8 h-8 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {t('friendsday.celebration2_title', 'Social Welfare Events')}
                    </h3>
                    <p className="text-gray-600">
                      {t('friendsday.celebration2_desc', 'Combined with humanitarian activities to serve the community')}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-primary-600">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 p-3 bg-primary-100 rounded-lg">
                    <Gift className="w-8 h-8 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {t('friendsday.celebration3_title', 'Cultural Programs')}
                    </h3>
                    <p className="text-gray-600">
                      {t('friendsday.celebration3_desc', 'Music, dance, and cultural events celebrating unity in diversity')}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-primary-600">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 p-3 bg-primary-50 rounded-lg">
                    <Sparkles className="w-8 h-8 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {t('friendsday.celebration4_title', 'Recognition & Awards')}
                    </h3>
                    <p className="text-gray-600">
                      {t('friendsday.celebration4_desc', 'Honoring members who exemplify the spirit of friendship')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Calendar className="w-12 h-12 mx-auto mb-6 text-primary-600" />
            <blockquote className="text-2xl font-light italic text-gray-800 mb-6">
              "{t('friendsday.quote', 'A day to celebrate the monument that stands overcoming human inequalities, spreading love and friendship')}"
            </blockquote>
          </div>
        </div>
      </section>

      {/* CTA Section */}
  <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <Heart className="w-12 h-12 mx-auto mb-6 text-yellow-300" />
          <h3 className="text-3xl font-bold mb-4">
            {t('friendsday.join_title', 'Be Part of Friends Day 2026')}
          </h3>
          <p className="text-xl mb-2 max-w-2xl mx-auto">
            {t('friendsday.join_desc', 'Join us in celebrating the spirit of friendship on March 12')}
          </p>
        </div>
      </section>
    </div>
  )
}

export default FriendsDay
