import React, { useState } from 'react'
import { useTranslation } from '../contexts/TranslationContext'
import { Calendar, MapPin, ArrowRight } from 'lucide-react'

const NewsEvents = () => {
  const { t } = useTranslation()
  const [currentPage, setCurrentPage] = useState(1)

  const newsItems = [
    {
      id: 136,
      date: '22 DEC',
      year: '2024',
      title: 'சென்னை மண்டல பேரவைக்கிளை நண்பர்கள் சந்திப்பு',
      titleEn: 'Chennai Regional Branch Friends Meeting',
      location: 'மூவரசம்பேட்டை, சென்னை',
      locationEn: 'Moovarasampettai, Chennai',
      description: 'சென்னை மண்டலப் பேரவைக் கிளை நண்பர்கள் சந்திப்பு',
      descriptionEn: 'Chennai Regional Branch Friends Meeting'
    },
    {
      id: 135,
      date: '25 MAY',
      year: '2024',
      title: 'இந்தியப் பேனாநண்பர் பேரவை 27ஆவது நட்புச் சங்கம விழா',
      titleEn: '27th Friendship Meet',
      location: 'குற்றாலம்',
      locationEn: 'Kuttalam',
      description: '27ஆவது நட்புச் சங்கம விழா தென்காசி மாவட்டம், குற்றாலம் டி. எம். என். எஸ் அரங்கம்.',
      descriptionEn: '27th Friendship Meet at TMNS Hall, Kuttalam, Tenkasi District'
    },
    {
      id: 134,
      date: '03 MAR',
      year: '2024',
      title: 'பேரவை சதுரங்கத் திருவிழா (IPL CHESS ACADEMY)',
      titleEn: 'IPL Chess Academy Festival',
      location: 'பாவூர்சத்திரம்',
      locationEn: 'Pavoorchathiram',
      description: 'இந்தியப் பேனாநண்பர் பேரவை சதுரங்கக் கழகம் - சதுரங்கத் திருவிழா, பாவூர்சத்திரம்',
      descriptionEn: 'IPL Chess Academy - Chess Festival, Pavoorchathiram'
    },
    {
      id: 133,
      date: '24 FEB',
      year: '2024',
      title: 'குமரி மாவட்டப் பேரவைக்கிளை நண்பர்கள் சந்திப்பு',
      titleEn: 'Kanyakumari District Branch Friends Meeting',
      location: 'கன்னியாகுமரி',
      locationEn: 'Kanyakumari',
      description: 'கன்னியாகுமரி மாவட்டப் பேரவைக்கிளை நண்பர்கள் சந்திப்பு - திரு.தா‌.தேவதாஸ் ஸ்வீட் ஹோம் அரங்கம்',
      descriptionEn: 'Kanyakumari District Branch Friends Meeting at Devadas Sweet Home Hall'
    },
    {
      id: 132,
      date: '11 FEB',
      year: '2024',
      title: '27வது நட்புச் சங்கமம் - பேரவை தலைவர் அவர்களின் அறிவிப்பு',
      titleEn: '27th Friendship Meet - President\'s Announcement',
      location: 'இந்தியா',
      locationEn: 'India',
      description: 'இந்தியப் பேனாநண்பர் பேரவை. மும்பை.',
      descriptionEn: 'Indian Penpals\' League, Mumbai'
    },
    {
      id: 131,
      date: '20 JAN',
      year: '2024',
      title: 'கிருஷ்ணகிரி மண்டல பேரவைக்கிளை நண்பர்கள் சந்திப்பு',
      titleEn: 'Krishnagiri Regional Branch Friends Meeting',
      location: 'ஓசூர்',
      locationEn: 'Hosur',
      description: 'புனித ஜான் போஸ்கோ பெண்கள் மேல்நிலைப் பள்ளி - ஓசூர்',
      descriptionEn: 'St. John Bosco Girls Higher Secondary School - Hosur'
    },
    {
      id: 130,
      date: '12 JAN',
      year: '2024',
      title: 'தமிழ்நாடு அரசு அயலகத் தமிழர் தின விழா',
      titleEn: 'Tamil Nadu Government NRI Tamil Day Celebration',
      location: 'தமிழ்நாடு',
      locationEn: 'Tamil Nadu',
      description: 'தமிழ்நாடு அரசு அயலகத் தமிழர் தின விழா, பேரவை தலைவர் அவர்களுக்கு விழா நினைவுப் பரிசு',
      descriptionEn: 'Tamil Nadu Government NRI Tamil Day - Award to IPL President'
    },
    {
      id: 129,
      date: '30 DEC',
      year: '2023',
      title: 'இந்தியப் பேனாநண்பர் பேரவை நடத்திய சதுரங்கப் போட்டி',
      titleEn: 'IPL Chess Tournament',
      location: 'மும்பை',
      locationEn: 'Mumbai',
      description: 'பேரவை சதுரங்கக் கழகம், மும்பை நகர் மாவட்ட சதுரங்க இயக்கம் இணைந்து நடத்திய சதுரங்கப் போட்டி',
      descriptionEn: 'Chess tournament organized by IPL Chess Academy with Mumbai District Chess Association'
    },
    {
      id: 128,
      date: '17 DEC',
      year: '2023',
      title: 'கோகோ விளையாடிய தமிழக வீராங்கனைகளுக்கு ரொக்கப் பரிசு',
      titleEn: 'Cash Prize for Tamil Nadu Kho-Kho Players',
      location: 'தமிழ்நாடு',
      locationEn: 'Tamil Nadu',
      description: 'தேசிய கோகோ சாம்பியன்ஷிப் போட்டி - தமிழக வீராங்கனைகளுக்கு ரொக்கப் பரிசு',
      descriptionEn: 'National Kho-Kho Championship - Cash prizes for Tamil Nadu women players'
    },
    {
      id: 125,
      date: '19 DEC',
      year: '2023',
      title: 'தெய்வப்புலவர் திருவள்ளுவர் திருவுருவச்சிலை திறப்புவிழா',
      titleEn: 'Thiruvalluvar Statue Inauguration',
      location: 'பாரிஸ், பிரான்ஸ்',
      locationEn: 'Paris, France',
      description: 'தெய்வப்புலவர் திருவள்ளுவர் திருவுருவச்சிலை திறப்புவிழா - பாரிஸ் ஸிர்ஜி, பிரான்ஸ்',
      descriptionEn: 'Thiruvalluvar Statue Inauguration - Cergy, Paris, France'
    },
    {
      id: 127,
      date: '16 JUL',
      year: '2023',
      title: 'சென்னை மாவட்டப் பேரவைக்கிளை நண்பர்கள் கலந்துரையாடல்',
      titleEn: 'Chennai District Branch Friends Discussion',
      location: 'சென்னை',
      locationEn: 'Chennai',
      description: 'பள்ளிச் சீருடைகள், மற்றும் கல்வி உபகரணங்கள வழங்குதல் - சென்னை மாவட்டப் பேரவைக்கிளை நண்பர்கள்',
      descriptionEn: 'Distribution of school uniforms and educational materials by Chennai District Branch'
    },
    {
      id: 124,
      date: '25 JUN',
      year: '2023',
      title: 'திருக்குறள் இந்திய தேசிய நூல் பன்னாட்டுக் கருத்தரங்கம்',
      titleEn: 'Thirukkural as Indian National Book - International Conference',
      location: 'புதுடில்லி',
      locationEn: 'New Delhi',
      description: 'திருக்குறள் இந்திய தேசிய நூல் - பன்னாட்டுக் கருத்தரங்கம் - புதுடில்லி',
      descriptionEn: 'International Conference on Thirukkural as Indian National Book - New Delhi'
    },
    {
      id: 126,
      date: '26 JUN',
      year: '2023',
      title: 'ஐபிஎல் செஸ் அகாடமி சதுரங்கப் போட்டி',
      titleEn: 'IPL Chess Academy Tournament',
      location: 'பாவூர்சத்திரம், தென்காசி',
      locationEn: 'Pavoorchathiram, Tenkasi',
      description: 'ஐபிஎல் செஸ் அகாடமி, சதுரங்கப் போட்டி பாவூர்சத்திரம். தென்காசி மவட்டம்',
      descriptionEn: 'IPL Chess Academy tournament, Pavoorchathiram, Tenkasi District'
    },
    {
      id: 123,
      date: '01 JAN',
      year: '2023',
      title: 'தமிழர் திருநாள் 2023 போட்டியில் வெற்றி பெற்றவர்களுக்கான பரிசு',
      titleEn: 'Tamil Festival 2023 Competition Winners',
      location: 'இந்தியா',
      locationEn: 'India',
      description: 'மாணவ, மாணவியருக்காக பேரவை நடத்திய சுதந்திரதின விழா-2022 / தமிழர் திருநாள்-2023 போட்டி',
      descriptionEn: 'Independence Day 2022 / Tamil Festival 2023 competition for students'
    },
    {
      id: 122,
      date: '18 JUN',
      year: '2023',
      title: 'இந்தியப் பேனாநண்பர் பேரவை புதுடில்லி மாநிலக்கிளை நண்பர்கள் சந்திப்பு',
      titleEn: 'IPL New Delhi State Branch Friends Meeting',
      location: 'புதுடில்லி',
      locationEn: 'New Delhi',
      description: 'புதுதில்லி மாநிலப் பேரவைக் கிளை நண்பர்கள் சந்திப்பு - பத்திரிக்கையாளர் மன்றம், ரெய்சான சாலை.',
      descriptionEn: 'New Delhi State Branch Friends Meeting - Press Club, Raisina Road'
    },
    {
      id: 121,
      date: '02 JUN',
      year: '2023',
      title: 'இந்தியப் பேனாநண்பர் பேரவை பஹ்ரைன் கிளை தொடக்கவிழா',
      titleEn: 'IPL Bahrain Branch Inauguration',
      location: 'பஹ்ரைன்',
      locationEn: 'Bahrain',
      description: 'பஹ்ரைன் கிளை தொடக்கவிழா, THE OLIVE HOTEL AUDITORIUM, JUFFAIR, MANAMA, BAHRAIN.',
      descriptionEn: 'Bahrain Branch Inauguration at The Olive Hotel Auditorium, Juffair, Manama'
    },
    {
      id: 120,
      date: '20 MAY',
      year: '2023',
      title: '26வது நட்புச் சங்கமம்',
      titleEn: '26th Friendship Meet',
      location: 'புது தில்லி',
      locationEn: 'New Delhi',
      description: '26வது நட்புச் சங்கமம், ஶ்ரீ விட்டல் மந்திர் அரங்கம், ராமகிருஷ்ணா புரம், புது தில்லி',
      descriptionEn: '26th Friendship Meet at Shri Vittal Mandir Hall, Ramakrishnapuram, New Delhi'
    },
    {
      id: 119,
      date: '16 FEB',
      year: '2023',
      title: 'பேரவைத் தலைவர் இளைய மகள் சரண்யா- ரோகித் திருமணவிழா',
      titleEn: 'IPL President\'s Daughter Saranya-Rohit Wedding',
      location: 'இந்தியா',
      locationEn: 'India',
      description: 'பேரவைத் தலைவர் இல்ல மணவிழா - பங்கேற்று போற்றிய உறவுகள் அனைவருக்கும் இதய அன்பு',
      descriptionEn: 'IPL President\'s family wedding - Heartfelt thanks to all who participated'
    },
    {
      id: 118,
      date: '16 FEB',
      year: '2023',
      title: 'இந்தியப் பேனாநண்பர் பேரவைத் தலைவர் இல்ல மணவிழா',
      titleEn: 'IPL President\'s Family Wedding',
      location: 'செகந்தராபாத்',
      locationEn: 'Secunderabad',
      description: 'இந்தியப் பேனாநண்பர் பேரவைத் தலைவர் இல்ல மணவிழா - செகந்தராபாத்',
      descriptionEn: 'IPL President\'s family wedding at Secunderabad'
    },
    {
      id: 117,
      date: '05 FEB',
      year: '2023',
      title: 'இராஜஸ்தான் மாநிலக்கிளை நண்பர்கள் சந்திப்பு',
      titleEn: 'Rajasthan State Branch Friends Meeting',
      location: 'பிவாடி, இராஜஸ்தான்',
      locationEn: 'Bhiwadi, Rajasthan',
      description: 'இராஜஸ்தான் மாநிலக்கிளை நண்பர்கள் சந்திப்பு - பிவாடி பிக்கானீர் சிற்றுண்டி விடுதி',
      descriptionEn: 'Rajasthan State Branch Friends Meeting at Bhiwadi Bikaner Restaurant'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-linear-to-r from-primary-600 to-primary-700 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            {t('nav.news', 'News & Events')}
          </h1>
          <p className="text-center text-primary-100 text-lg max-w-2xl mx-auto">
            Stay updated with the latest happenings, events, and activities of the Indian Penpals' League
          </p>
        </div>
      </div>

      {/* News Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsItems.map((item) => (
            <div 
              key={item.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
            >
              {/* Date Badge */}
              <div className="bg-primary-600 text-white p-4">
                <div className="flex items-center justify-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  <span className="font-bold text-lg">{item.date}</span>
                  <span className="ml-2 text-sm opacity-90">{item.year}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3 group-hover:text-primary-600 transition-colors line-clamp-2">
                  {item.titleEn}
                </h3>
                
                <div className="flex items-start mb-3 text-gray-600">
                  <MapPin className="w-4 h-4 mr-2 mt-1 shrink-0 text-primary-600" />
                  <span className="text-sm">{item.locationEn}</span>
                </div>

                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {item.descriptionEn}
                </p>

                <button className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold text-sm group-hover:translate-x-1 transition-transform">
                  Read More
                  <ArrowRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination (placeholder) */}
        <div className="flex justify-center mt-12 gap-2">
          <button className="px-4 py-2 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors">
            1
          </button>
          <button className="px-4 py-2 bg-white text-gray-700 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-sm">
            2
          </button>
          <button className="px-4 py-2 bg-white text-gray-700 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-sm">
            3
          </button>
        </div>
      </div>
    </div>
  )
}

export default NewsEvents
