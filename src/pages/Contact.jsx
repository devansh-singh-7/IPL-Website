import React from 'react'
import { useTranslation } from '../contexts/TranslationContext'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

const Contact = () => {
  const { t } = useTranslation()

  return (
    <div>
      {/* Hero Section */}
  <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fadeIn">
              {t('nav.contact', 'Contact Us')}
            </h1>
            <p className="text-xl animate-fadeIn" style={{ animationDelay: '0.2s' }}>
              {t('contact.get_in_touch', 'Get In Touch')}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Details */}
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-8">
                  {t('footer.contact_us', 'Contact Us')}
                </h2>

                <div className="space-y-6">
                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 p-3 bg-primary-100 rounded-lg">
                      <MapPin className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-2">
                        {t('contact.address_title', 'Address')}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {t('footer.address')}
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 p-3 bg-primary-100 rounded-lg">
                      <Phone className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-2">
                        {t('contact.phone_title', 'Phone')}
                      </h3>
                      <p className="text-gray-600">+91 9892035187</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 p-3 bg-primary-100 rounded-lg">
                      <Mail className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-2">
                        {t('footer.email', 'Email')}
                      </h3>
                      <p className="text-gray-600">iplmumbai12395@gmail.com</p>
                    </div>
                  </div>

                  {/* Office Hours */}
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 p-3 bg-primary-100 rounded-lg">
                      <Clock className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-2">
                        {t('contact.hours_title', 'Office Hours')}
                      </h3>
                      <p className="text-gray-600">
                        {t('contact.hours_detail', 'Monday - Saturday: 10:00 AM - 6:00 PM')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-8">
                  {t('contact.send_message', 'Send Us a Message')}
                </h2>

                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                      {t('contact.form_name', 'Your Name')}
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
                      placeholder={t('contact.form_name_placeholder', 'Enter your name')}
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                      {t('contact.form_email', 'Email Address')}
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
                      placeholder={t('contact.form_email_placeholder', 'Enter your email')}
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                      {t('contact.form_subject', 'Subject')}
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
                      placeholder={t('contact.form_subject_placeholder', 'Enter subject')}
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                      {t('contact.form_message', 'Message')}
                    </label>
                    <textarea
                      id="message"
                      rows="5"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
                      placeholder={t('contact.form_message_placeholder', 'Enter your message')}
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-300 shadow-md hover:shadow-lg"
                  >
                    {t('contact.form_submit', 'Send Message')}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                {t('contact.visit_us', 'Visit Us')}
              </h2>
              <p className="text-lg text-gray-600">
                {t('contact.visit_desc', 'We welcome you to visit our office in Mumbai. Please call ahead to schedule an appointment.')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-start">
              {/* Address Card */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  {t('contact.office_address', 'Our Office')}
                </h3>
                <div className="space-y-3 text-gray-700">
                  <p className="font-semibold text-primary-600">Indian Penpals' League</p>
                  <p className="leading-relaxed">
                    103, Starview Apts.,<br />
                    Opp. Corporate Park,<br />
                    V.N.Purav Marg, Chembur,<br />
                    Mumbai - 400071, India
                  </p>
                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-sm text-gray-600 mb-2">
                      <strong>{t('contact.directions', 'Directions')}:</strong> {t('contact.directions_text', 'Near Chembur station, opposite Corporate Park')}
                    </p>
                  </div>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=103+Starview+Apartments+Chembur+Mumbai+400071"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors shadow-md hover:shadow-lg"
                  >
                    {t('contact.open_in_maps', 'Open in Google Maps')}
                  </a>
                </div>
              </div>

              {/* Google Map Embed */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.4567!2d72.8997!3d19.0596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8a3e74c0000%3A0x0!2zMTnCsDAzJzM0LjYiTiA3MsKwNTMnNTkuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Indian Penpals League Office Location"
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>

            {/* Getting Here Section */}
            <div className="mt-8 bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                {t('contact.getting_here', 'Getting Here')}
              </h3>
              <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-600">
                <div>
                  <p className="font-semibold text-gray-800 mb-2">🚇 {t('contact.by_train', 'By Train')}</p>
                  <p>{t('contact.train_details', 'Chembur Station - 5 min walk')}</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800 mb-2">🚌 {t('contact.by_bus', 'By Bus')}</p>
                  <p>{t('contact.bus_details', 'Multiple bus routes available')}</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800 mb-2">🚗 {t('contact.by_car', 'By Car')}</p>
                  <p>{t('contact.car_details', 'Parking available nearby')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
