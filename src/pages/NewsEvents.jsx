import React from 'react'
import { useTranslation } from '../contexts/TranslationContext'

const NewsEvents = () => {
  const { t } = useTranslation()
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">{t('nav.news', 'News & Events')}</h1>
        <p className="text-center text-gray-600">News & Events page content coming soon...</p>
      </div>
    </div>
  )
}

export default NewsEvents
