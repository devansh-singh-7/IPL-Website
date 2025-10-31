import React, { useState } from 'react'
import { useTranslation } from '../contexts/TranslationContext'
import { Users, Heart, Calendar, MapPin, Camera, Handshake, ArrowRight } from 'lucide-react'

const FriendshipMeet = () => {
  const { t } = useTranslation()
  const [selectedYear, setSelectedYear] = useState('2024')

  const friendshipMeets = [
    {
      year: '2024',
      number: '28',
      title: '28வது நட்புச் சங்கமம்',
      titleEn: '28th Friendship Meet',
      date: '24 MAY 2025',
      location: 'To be announced',
      description: 'The 28th Annual Friendship Meet bringing together pen friends from across India and abroad'
    },
    {
      year: '2024',
      number: '27',
      title: '27வது நட்புச் சங்கமம்',
      titleEn: '27th Friendship Meet',
      date: '25 MAY 2024',
      location: 'Kuttalam, Tenkasi District',
      locationTamil: 'குற்றாலம், தென்காசி மாவட்டம்',
      description: '27th Annual Friendship Meet held at TMNS Hall, Kuttalam'
    },
    {
      year: '2023',
      number: '26',
      title: '26வது நட்புச் சங்கமம்',
      titleEn: '26th Friendship Meet',
      date: '20 MAY 2023',
      location: 'New Delhi',
      locationTamil: 'புது தில்லி',
      description: 'Shri Vittal Mandir Hall, Ramakrishnapuram, New Delhi'
    }
  ]

  const highlights = [
    { 
      icon: Users, 
      title: 'Meet Pen Friends',
      description: 'Friends who have been corresponding through letters meet in person, strengthening bonds and experiencing the joy of friendship'
    },
    { 
      icon: Heart, 
      title: 'Family Gathering',
      description: 'Members attend with their families, creating a warm atmosphere where friendship is celebrated as a family value'
    },
    { 
      icon: Handshake, 
      title: 'Two-Day Event',
      description: 'Organized as a comprehensive two-day event filled with activities, cultural programs, and meaningful interactions'
    },
    { 
      icon: Camera, 
      title: 'Memorable Moments',
      description: 'Creating lasting memories through shared experiences, cultural exchanges, and celebrating the spirit of friendship'
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-linear-to-r from-primary-600 to-primary-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block p-4 bg-white/10 backdrop-blur-sm rounded-full mb-6">
              <Users className="w-16 h-16" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t('nav.meet', 'Friendship Meet')}
            </h1>
            <p className="text-xl md:text-2xl text-primary-100">
              {t('meet.hero_tamil', 'நட்புச் சங்கமம் - Where Letters Transform into Lasting Bonds')}
            </p>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Heart className="w-12 h-12 mx-auto mb-6 text-yellow-400" />
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {t('meet.intro_p1', 'Friends who have been exchanging letters and thoughts meet in person to experience the strength and pride of friendship through our organized platform - the Friendship Meet (நட்புச் சங்கமம்).')}
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                {t('meet.intro_p2', 'IPL members participate in these Friendship Meets with their family members. The two-day events create a sense of family celebration that adds special value to friendship.')}
              </p>
            </div>

            {/* Highlights */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {highlights.map((highlight, index) => {
                const Icon = highlight.icon
                return (
                  <div 
                    key={index}
                    className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-xl transition-all border border-gray-200"
                  >
                    <div className="flex items-start gap-4">
                      <div className="shrink-0 p-3 bg-white rounded-lg shadow-sm">
                        <Icon className="w-8 h-8 text-primary-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">
                          {highlight.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {highlight.description}
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

      {/* Past Friendship Meets */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              Annual Friendship Meets
            </h2>

            {/* Year Selector */}
            <div className="flex justify-center mb-8">
              <div className="bg-white rounded-lg shadow-md p-2 inline-flex gap-2">
                {['2024', '2023', '2022'].map((year) => (
                  <button
                    key={year}
                    onClick={() => setSelectedYear(year)}
                    className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
                      selectedYear === year
                        ? 'bg-primary-600 text-white'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    {year}
                  </button>
                ))}
              </div>
            </div>

            {/* Friendship Meets List */}
            <div className="space-y-6">
              {friendshipMeets
                .filter(meet => meet.year === selectedYear)
                .map((meet, index) => (
                  <div 
                    key={index}
                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow group"
                  >
                    <div className="md:flex">
                      {/* Date Badge */}
                      <div className="bg-primary-600 text-white p-6 md:w-48 flex flex-col items-center justify-center">
                        <div className="text-4xl font-bold mb-2">{meet.number}</div>
                        <div className="text-sm opacity-90">Annual Meet</div>
                      </div>

                      {/* Content */}
                      <div className="p-6 flex-1">
                        <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-primary-600 transition-colors">
                          {meet.titleEn}
                        </h3>
                        
                        <div className="space-y-2 mb-4">
                          <div className="flex items-center text-gray-600">
                            <Calendar className="w-5 h-5 mr-3 text-primary-600" />
                            <span className="font-semibold">{meet.date}</span>
                          </div>
                          
                          <div className="flex items-center text-gray-600">
                            <MapPin className="w-5 h-5 mr-3 text-primary-600" />
                            <span>{meet.location}</span>
                          </div>
                        </div>

                        <p className="text-gray-600 mb-4">
                          {meet.description}
                        </p>

                        <button className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold group-hover:translate-x-1 transition-transform">
                          View Details
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>

            {/* Info Note */}
            <div className="mt-12 bg-primary-50 border border-primary-200 rounded-lg p-6">
              <p className="text-gray-700 text-center">
                <strong>Note:</strong> To view more details about Friendship Meet programs and souvenir magazine releases, select a year from above and explore past events.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <Handshake className="w-12 h-12 mx-auto mb-6 text-primary-600" />
          <h3 className="text-3xl font-bold mb-4 text-gray-800">
            Join Our Next Friendship Meet
          </h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-600">
            Experience the joy of meeting friends who share your passion for friendship and humanity
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl"
          >
            Contact Us for Details
          </a>
        </div>
      </section>
    </div>
  )
}

export default FriendshipMeet
