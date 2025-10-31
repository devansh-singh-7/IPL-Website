import { Link } from 'react-router-dom';
import { Heart, Users, HandHeart, Calendar, Award, ArrowRight, Mail, ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslation } from '../contexts/TranslationContext'
import { useState } from 'react';

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [slideDirection, setSlideDirection] = useState('right');

  const images = [
    {
      src: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1200&h=600&fit=crop',
      title: 'Community Service',
      description: 'Serving communities with love and dedication'
    },
    {
      src: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=1200&h=600&fit=crop',
      title: 'Friendship Meet',
      description: 'Building bonds that last a lifetime'
    },
    {
      src: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=1200&h=600&fit=crop',
      title: 'Educational Support',
      description: 'Empowering through education and learning'
    },
    {
      src: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1200&h=600&fit=crop',
      title: 'Humanitarian Work',
      description: 'Making a difference in people\'s lives'
    },
    {
      src: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=1200&h=600&fit=crop',
      title: 'Friends Day Celebration',
      description: 'Celebrating the spirit of friendship'
    }
  ];

  const goToPrevious = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setSlideDirection('left');
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const goToNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setSlideDirection('right');
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
    setTimeout(() => setIsTransitioning(false), 500);
  };

  return (
    <section className="py-12 sm:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12 animate-fadeIn">
          <h2 className="section-title">Our Memories</h2>
          <div className="w-16 sm:w-20 h-1 bg-primary-600 mx-auto mb-3 sm:mb-4"></div>
          <p className="section-subtitle px-4">
            Moments of love, friendship, and service captured through the years
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-5xl mx-auto">
          {/* Image Container */}
          <div className="relative h-64 sm:h-96 md:h-[500px] rounded-xl overflow-hidden shadow-2xl">
            {/* Background Gradient Overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent z-10"></div>
            
            {/* Image with slide animation */}
            <div 
              className={`w-full h-full transition-all duration-500 ease-in-out ${
                slideDirection === 'right' 
                  ? 'animate-slideInRight' 
                  : 'animate-slideInLeft'
              }`}
              key={currentIndex}
            >
              <img 
                src={images[currentIndex].src}
                alt={images[currentIndex].title}
                className="w-full h-full object-cover animate-zoomIn"
              />
            </div>
            
            {/* Text Overlay with fade-up animation */}
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 md:p-12 z-20 text-white">
              <h3 
                className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3 animate-fadeInUp"
                key={`title-${currentIndex}`}
              >
                {images[currentIndex].title}
              </h3>
              <p 
                className="text-sm sm:text-base md:text-lg text-gray-200 animate-fadeInUp" 
                style={{ animationDelay: '0.1s' }}
                key={`desc-${currentIndex}`}
              >
                {images[currentIndex].description}
              </p>
            </div>
          </div>

          {/* Navigation Buttons with pulse animation */}
          <button
            onClick={goToPrevious}
            disabled={isTransitioning}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-30 flex items-center justify-center bg-white text-primary-600 border border-primary-600 hover:bg-primary-700 hover:border-primary-700 hover:text-white p-2 sm:p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-2xl active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed group"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 group-hover:animate-pulse" />
          </button>
          
          <button
            onClick={goToNext}
            disabled={isTransitioning}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-30 flex items-center justify-center bg-white text-primary-600 border border-primary-600 hover:bg-primary-700 hover:border-primary-700 hover:text-white p-2 sm:p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-2xl active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed group"
            aria-label="Next image"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:animate-pulse" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (isTransitioning || index === currentIndex) return;
                  setIsTransitioning(true);
                  setSlideDirection(index > currentIndex ? 'right' : 'left');
                  setCurrentIndex(index);
                  setTimeout(() => setIsTransitioning(false), 500);
                }}
                disabled={isTransitioning}
                className={`rounded-full transition-all duration-300 hover:scale-125 active:scale-95 ${
                  index === currentIndex 
                    ? 'bg-primary-600 w-6 sm:w-8 h-2 sm:h-3 animate-pulse' 
                    : 'bg-gray-300 hover:bg-primary-400 w-2 h-2 sm:w-3 sm:h-3'
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

const Home = () => {
  const { t } = useTranslation()
  
  const stats = [
    { icon: Users, value: '198,115+', labelKey: 'home.stats.visitors' },
    { icon: Heart, value: '40+', labelKey: 'home.stats.activities' },
    { icon: Calendar, value: '30+', labelKey: 'home.stats.years' },
    { icon: Award, value: '80G', labelKey: 'home.stats.certificate' },
  ];

  const features = [
    {
      icon: HandHeart,
      link: '/humanitarian-services',
      titleKey: 'home.feature1_title',
      descKey: 'home.feature1_desc',
    },
    {
      icon: Users,
      link: '/friendship-meet',
      titleKey: 'home.feature2_title',
      descKey: 'home.feature2_desc',
    },
    {
      icon: Calendar,
      link: '/friends-day',
      titleKey: 'home.feature3_title',
      descKey: 'home.feature3_desc',
    },
  ];

  const recentActivities = [
    {
      dateKey: 'home.activity1_date',
      titleKey: 'home.activity1_title',
      descKey: 'home.activity1_desc',
    },
    {
      dateKey: 'home.activity2_date',
      titleKey: 'home.activity2_title',
      descKey: 'home.activity2_desc',
    },
    {
      dateKey: 'home.activity3_date',
      titleKey: 'home.activity3_title',
      descKey: 'home.activity3_desc',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-white py-12 sm:py-16 md:py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary-50 px-4 sm:px-6 py-2 rounded-full mb-4 sm:mb-6 animate-fadeIn">
              <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 animate-pulse-slow" />
              <span className="text-xs sm:text-sm font-semibold text-primary-700">{t('home.established', 'Established March 12, 1995')}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 animate-slideInLeft text-primary-700 px-2">
              {t('home.hero_title', "Indian Penpals' League")}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 leading-relaxed animate-fadeIn px-2">
              {t('home.hero_sub', 'Love, Friendship & Humanity')}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-scaleIn px-4" style={{ animationDelay: '0.4s' }}>
              <Link to="/about" className="btn-primary inline-flex items-center gap-2 justify-center hover-lift">
                {t('nav.about', 'About')}
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="btn-outline-primary px-6 py-3 inline-flex items-center gap-2 justify-center"
              >
                <Mail className="w-5 h-5" />
                {t('nav.contact', 'Contact')}
              </Link>
            </div>
          </div>
        </div>
        
        {/* Decorative Wave */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg className="relative block w-full h-12" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-gray-50"></path>
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8 sm:py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div 
                  key={index} 
                  className="text-center p-4 sm:p-6 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow hover-lift animate-scaleIn"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Icon className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mx-auto mb-2 sm:mb-3 text-primary-600 animate-bounce-subtle" />
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-primary-700 mb-1">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-gray-600 font-medium">{t(stat.labelKey)}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="section-title">{t('home.welcome_title')}</h2>
              <div className="w-16 sm:w-20 h-1 bg-primary-600 mx-auto mb-4 sm:mb-6"></div>
            </div>
            
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-6 sm:p-8 md:p-12 mb-6 sm:mb-8">
              <div className="prose max-w-none">
                <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-4 sm:mb-6">
                  <span className="text-xl sm:text-2xl text-primary-600 font-bold">"</span>
                  {t('home.founder_quote')}
                  <span className="text-xl sm:text-2xl text-primary-600 font-bold">"</span>
                </p>
                <p className="text-right text-sm sm:text-base text-gray-600 italic mb-6 sm:mb-8">
                  - {t('home.founder_name')}
                </p>
                
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3 sm:mb-4">
                  {t('home.about_intro')}
                </p>
                
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3 sm:mb-4">
                  {t('home.about_registration')} <strong>#F23778</strong>.
                </p>
                
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  {t('home.about_80g')}
                </p>
              </div>
              
              <div className="mt-6 sm:mt-8 text-center">
                <Link to="/about" className="btn-primary inline-flex items-center gap-2">
                  {t('home.read_more')}
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12 animate-fadeIn">
            <h2 className="section-title">{t('home.our_activities')}</h2>
            <div className="w-16 sm:w-20 h-1 bg-primary-600 mx-auto mb-3 sm:mb-4"></div>
            <p className="section-subtitle max-w-2xl mx-auto px-4">
              {t('home.activities_subtitle')}
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index} 
                  className="card group hover-lift animate-fadeIn"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="p-6 sm:p-8">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-linear-to-br from-primary-500 to-primary-700 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 animate-float">
                      <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">{t(feature.titleKey)}</h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4 sm:mb-6">{t(feature.descKey)}</p>
                    <Link 
                      to={feature.link}
                      className="text-primary-600 font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all text-sm sm:text-base"
                    >
                      {t('home.learn_more')}
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Recent Activities */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12 animate-fadeIn">
            <h2 className="section-title">{t('home.recent_activities')}</h2>
            <div className="w-16 sm:w-20 h-1 bg-primary-600 mx-auto mb-3 sm:mb-4"></div>
            <p className="section-subtitle px-4">
              {t('home.recent_subtitle')}
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
            {recentActivities.map((activity, index) => (
              <div 
                key={index} 
                className="card group cursor-pointer hover-lift animate-slideInLeft"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="p-5 sm:p-6">
                  <div className="text-xs sm:text-sm font-semibold text-primary-600 mb-2 sm:mb-3">{t(activity.dateKey)}</div>
                  <h3 className="text-base sm:text-lg font-bold text-red-800 mb-2 group-hover:text-primary-600 transition-colors">
                    {t(activity.titleKey)}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600">{t(activity.descKey)}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center animate-scaleIn" style={{ animationDelay: '0.6s' }}>
            <Link to="/humanitarian-services" className="btn-primary inline-flex items-center gap-2 hover-scale">
              {t('home.view_all')}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Image Gallery Carousel */}
      <ImageCarousel />

      {/* Mother Teresa Quote */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fadeIn">
            <div className="mb-6 animate-float">
              <Heart className="w-12 h-12 sm:w-16 sm:h-16 mx-auto text-yellow-400" />
            </div>
            <blockquote className="text-xl sm:text-2xl md:text-3xl font-light italic leading-relaxed mb-6 animate-slideInLeft text-gray-800" style={{ animationDelay: '0.2s' }}>
              "{t('home.mother_teresa_quote')}"
            </blockquote>
            <cite className="text-base sm:text-lg not-italic font-semibold animate-slideInRight text-gray-700" style={{ animationDelay: '0.4s' }}>- {t('home.mother_teresa')}</cite>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
