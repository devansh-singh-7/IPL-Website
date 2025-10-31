import React, { useMemo, useState } from 'react'
import { useTranslation } from '../contexts/TranslationContext'
import { Calendar, Heart, Gift, Users, Sparkles, MapPin, ArrowRight } from 'lucide-react'
import data from '../data/friendsday.json'

const FriendsDay = () => {
  const { t } = useTranslation()
  const [selectedState, setSelectedState] = useState('')
  const [selectedDistrict, setSelectedDistrict] = useState('')
  const [selectedYear, setSelectedYear] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const states = useMemo(() => data.states.map(s => s.name), [])
  const districts = useMemo(() => {
    const st = data.states.find(s => s.name === selectedState)
    return st ? st.districts.map(d => d.name) : []
  }, [selectedState])
  const years = useMemo(() => {
    const st = data.states.find(s => s.name === selectedState)
    const dist = st?.districts.find(d => d.name === selectedDistrict)
    return dist ? dist.years.map(y => String(y.year)) : []
  }, [selectedState, selectedDistrict])
  const results = useMemo(() => {
    const st = data.states.find(s => s.name === selectedState)
    const dist = st?.districts.find(d => d.name === selectedDistrict)
    const yr = dist?.years.find(y => String(y.year) === String(selectedYear))
    return yr?.entries ?? []
  }, [selectedState, selectedDistrict, selectedYear])

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-linear-to-r from-primary-600 to-primary-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block p-4 bg-white/10 backdrop-blur-sm rounded-full mb-6">
              <Calendar className="w-16 h-16" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t('nav.friendsDay', 'Friends Day')}
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-primary-100">
              {t('friendsday.hero_tamil', 'நண்பர்கள் தினம் - March 12')}
            </p>
            <p className="text-lg text-primary-100">
              {t('friendsday.hero_sub', 'Turning Tragedy into Triumph Through Friendship')}
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
                The day we celebrate as <strong>Friends Day</strong> carries a profound historical significance that transformed a moment of tragedy into a beacon of hope and humanity.
              </p>
            </div>

            {/* Finder - State / District / Year */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6 sm:p-8 mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">{t('friendsday.browse_title', 'Browse Friends Day Celebrations')}</h2>
              <div className="grid md:grid-cols-4 gap-4">
                <div className="md:col-span-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1">{t('friendsday.select_state', 'Select State')}</label>
                  <select
                    value={selectedState}
                    onChange={(e) => { setSelectedState(e.target.value); setSelectedDistrict(''); setSelectedYear(''); setSubmitted(false); }}
                    className="w-full px-3 py-2 rounded-lg border border-gray-300 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-600"
                  >
                    <option value="">{t('friendsday.select_state', 'Select State')}</option>
                    {states.map(s => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
                <div className="md:col-span-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1">{t('friendsday.select_district', 'Select District')}</label>
                  <select
                    value={selectedDistrict}
                    onChange={(e) => { setSelectedDistrict(e.target.value); setSelectedYear(''); setSubmitted(false); }}
                    disabled={!selectedState}
                    className="w-full px-3 py-2 rounded-lg border border-gray-300 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-600 disabled:opacity-50"
                  >
                    <option value="" disabled>{selectedState ? t('friendsday.select_district', 'Select District') : t('friendsday.pick_state_first', 'Pick state first')}</option>
                    {districts.map(d => (
                      <option key={d} value={d}>{d}</option>
                    ))}
                  </select>
                </div>
                <div className="md:col-span-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1">{t('friendsday.select_year', 'Select Year')}</label>
                  <select
                    value={selectedYear}
                    onChange={(e) => { setSelectedYear(e.target.value); setSubmitted(false); }}
                    disabled={!selectedDistrict}
                    className="w-full px-3 py-2 rounded-lg border border-gray-300 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-600 disabled:opacity-50"
                  >
                    <option value="" disabled>{selectedDistrict ? t('friendsday.select_year', 'Select Year') : t('friendsday.pick_district_first', 'Pick district first')}</option>
                    {years.map(y => (
                      <option key={y} value={y}>{y}</option>
                    ))}
                  </select>
                </div>
                <div className="md:col-span-1 flex items-end">
                  <button
                    onClick={() => setSubmitted(true)}
                    disabled={!selectedState || !selectedDistrict || !selectedYear}
                    className="w-full py-3 rounded-lg font-semibold bg-primary-600 text-white hover:bg-primary-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center gap-2"
                  >
                    <ArrowRight className="w-5 h-5" /> {t('common.submit', 'Submit')}
                  </button>
                </div>
              </div>

              {/* Results */}
              {submitted && (
                <div className="mt-8">
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                    <MapPin className="w-4 h-4 text-primary-600" />
                    <span>{selectedDistrict}, {selectedState} · {selectedYear}</span>
                  </div>
                  {results.length === 0 ? (
                    <div className="p-6 rounded-lg bg-gray-50 text-gray-600 text-sm">{t('friendsday.no_entries', 'No entries available for this selection yet.')}</div>
                  ) : (
                    <div className="grid sm:grid-cols-2 gap-6">
                      {results.map((item, idx) => (
                        <div key={idx} className="card p-5">
                          <h4 className="text-lg font-bold text-gray-800 mb-2">{item.title}</h4>
                          <p className="text-gray-600 mb-3 text-sm">{item.description}</p>
                          {item.images && item.images.length > 0 && (
                            <div className="grid grid-cols-3 gap-2">
                              {item.images.map((src, i) => (
                                <img key={i} src={src} alt="Friends Day" className="rounded-md object-cover h-24 w-full" />
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Why March 12 - Historical Context */}
            <div className="bg-linear-to-br from-primary-50 to-primary-100 rounded-lg p-8 mb-12 shadow-lg">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                {t('friendsday.why_title', 'Why March 12?')}
              </h2>
              
              {/* Vertical timeline */}
              <div className="relative">
                {/* Center line on md+ with grow animation */}
                <div className="hidden md:block timeline-line top-0 bottom-0" aria-hidden="true">
                  <div className="timeline-line-inner" />
                </div>

                <div className="space-y-12">
                  {/* 1993 - left side on md+, stacked on mobile */}
                  <div className="relative md:flex md:items-start">
                    {/* Year marker (center) */}
                    <div className={`hidden md:flex absolute left-1/2 -translate-x-1/2 -top-2 timeline-year ${(/[-+]/.test('1993') && '1993'.length > 4) ? 'timeline-year--wide ' : ''}timeline-year--neutral animate-bounce-subtle`}>1993</div>

                    {/* Card container */}
                    <div className="md:w-1/2 md:pr-10">
                      <div className="bg-white rounded-lg p-6 shadow-md animate-slideInLeft" style={{animationDelay:'0.05s'}}>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">March 12, 1993 - A Day of Darkness</h3>
                        <p className="text-gray-700 leading-relaxed">
                          On this fateful day, Mumbai witnessed a series of devastating bomb blasts that shook the city to its core. The tragedy left deep scars of pain and grief, challenging the very essence of humanity and peaceful coexistence.
                        </p>
                      </div>
                    </div>

                    {/* Spacer for right column alignment on md+ */}
                    <div className="hidden md:block md:w-1/2" />
                  </div>

                  {/* 1995 - right side on md+, stacked on mobile */}
                  <div className="relative md:flex md:items-start md:justify-between">
                    {/* Spacer for left column on md+ */}
                    <div className="hidden md:block md:w-1/2" />

                    {/* Year marker (center) */}
                    <div className={`hidden md:flex absolute left-1/2 -translate-x-1/2 -top-2 timeline-year ${(/[-+]/.test('1995') && '1995'.length > 4) ? 'timeline-year--wide ' : ''}timeline-year--primary animate-bounce-subtle`}>1995</div>

                    {/* Card container */}
                    <div className="md:w-1/2 md:pl-10">
                      <div className="bg-white rounded-lg p-6 shadow-md border-2 border-primary-400 animate-slideInRight" style={{animationDelay:'0.15s'}}>
                        <h3 className="text-xl font-bold text-primary-700 mb-2">March 12, 1995 - A New Dawn of Friendship</h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                          Exactly two years after the tragedy, like a full moon breaking through dark clouds, the <strong>Indian Penpals' League</strong> was born. This wasn't just the founding of an organization—it was a powerful statement that humanity and friendship would triumph over hatred and division.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                          The seed of thought to prevent humanity from becoming a rare commodity in human sovereignty took root, growing into a mighty tree of friendship that continues to flourish today.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center bg-white rounded-lg p-6 shadow-md">
                <Sparkles className="w-10 h-10 mx-auto mb-4 text-primary-600" />
                <p className="text-lg font-semibold text-gray-800 mb-2">
                  {t('friendsday.monument_title', 'A Monument Carved in Stone')}
                </p>
                <p className="text-gray-700 leading-relaxed">
                  This friendship sanctuary stands as a monument transcending human hierarchies. March 12, the day IPL began, has been continuously celebrated as <strong>Friends Day</strong> with great enthusiasm through social welfare activities every year.
                </p>
              </div>
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
