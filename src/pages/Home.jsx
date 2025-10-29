import { Link } from 'react-router-dom';
import { Heart, Users, HandHeart, Calendar, Award, ArrowRight, Mail } from 'lucide-react';
import { useTranslation } from '../contexts/TranslationContext'

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
      <section className="relative bg-white py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary-50 px-6 py-2 rounded-full mb-6 animate-fadeIn">
              <Heart className="w-5 h-5 text-primary-600 animate-pulse-slow" />
              <span className="text-sm font-semibold text-primary-700">{t('home.established', 'Established March 12, 1995')}</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-slideInLeft text-primary-700">
              {t('home.hero_title', "Indian Penpals' League")}
            </h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed animate-fadeIn">
              {t('home.hero_sub', 'Love, Friendship & Humanity')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scaleIn" style={{ animationDelay: '0.4s' }}>
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
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div 
                  key={index} 
                  className="text-center p-6 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow hover-lift animate-scaleIn"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Icon className="w-12 h-12 mx-auto mb-3 text-primary-600 animate-bounce-subtle" />
                  <div className="text-3xl font-bold text-primary-700 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600 font-medium">{t(stat.labelKey)}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="section-title">{t('home.welcome_title')}</h2>
              <div className="w-20 h-1 bg-primary-600 mx-auto mb-6"></div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-8">
              <div className="prose max-w-none">
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  <span className="text-2xl text-primary-600 font-bold">"</span>
                  {t('home.founder_quote')}
                  <span className="text-2xl text-primary-600 font-bold">"</span>
                </p>
                <p className="text-right text-gray-600 italic mb-8">
                  - {t('home.founder_name')}
                </p>
                
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t('home.about_intro')}
                </p>
                
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t('home.about_registration')} <strong>#F23778</strong>.
                </p>
                
                <p className="text-gray-700 leading-relaxed">
                  {t('home.about_80g')}
                </p>
              </div>
              
              <div className="mt-8 text-center">
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
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fadeIn">
            <h2 className="section-title">{t('home.our_activities')}</h2>
            <div className="w-20 h-1 bg-primary-600 mx-auto mb-4"></div>
            <p className="section-subtitle max-w-2xl mx-auto">
              {t('home.activities_subtitle')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index} 
                  className="card group hover-lift animate-fadeIn"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="p-8">
                    <div className="w-16 h-16 bg-linear-to-br from-primary-500 to-primary-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 animate-float">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">{t(feature.titleKey)}</h3>
                    <p className="text-gray-600 leading-relaxed mb-6">{t(feature.descKey)}</p>
                    <Link 
                      to={feature.link}
                      className="text-primary-600 font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all"
                    >
                      {t('home.learn_more')}
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Recent Activities */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fadeIn">
            <h2 className="section-title">{t('home.recent_activities')}</h2>
            <div className="w-20 h-1 bg-primary-600 mx-auto mb-4"></div>
            <p className="section-subtitle">
              {t('home.recent_subtitle')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {recentActivities.map((activity, index) => (
              <div 
                key={index} 
                className="card group cursor-pointer hover-lift animate-slideInLeft"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="p-6">
                  <div className="text-sm font-semibold text-primary-600 mb-3">{t(activity.dateKey)}</div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-primary-600 transition-colors">
                    {t(activity.titleKey)}
                  </h3>
                  <p className="text-gray-600">{t(activity.descKey)}</p>
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

      {/* Mother Teresa Quote */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fadeIn">
            <div className="mb-6 animate-float">
              <Heart className="w-16 h-16 mx-auto text-primary-600" />
            </div>
            <blockquote className="text-2xl md:text-3xl font-light italic leading-relaxed mb-6 animate-slideInLeft text-gray-800" style={{ animationDelay: '0.2s' }}>
              "{t('home.mother_teresa_quote')}"
            </blockquote>
            <cite className="text-lg not-italic font-semibold animate-slideInRight text-gray-700" style={{ animationDelay: '0.4s' }}>- {t('home.mother_teresa')}</cite>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
