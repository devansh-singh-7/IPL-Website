import React, { createContext, useContext, useEffect, useState } from 'react'
import translations from '../i18n/translations'

const TranslationContext = createContext()

export const TranslationProvider = ({ children }) => {
  const [lang, setLang] = useState(() => {
    try {
      return localStorage.getItem('ipl_lang') || 'en'
    } catch (e) {
      return 'en'
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem('ipl_lang', lang)
    } catch (e) {}
    try {
      // Reflect language on the <html> element for language-specific CSS overrides
      if (typeof document !== 'undefined') {
        const el = document.documentElement
        el.setAttribute('lang', lang)
        el.classList.toggle('lang-ta', lang === 'ta')
      }
    } catch (e) {}
  }, [lang])

  const t = (key, fallback) => {
    if (!key) return ''
    const parts = key.split('.')
    let cur = translations[lang]
    for (const p of parts) {
      if (!cur) break
      cur = cur[p]
    }
    if (cur == null) return fallback ?? key
    return cur
  }

  const setLanguage = (l) => setLang(l)
  const toggleLanguage = () => {
    setLang((s) => {
      if (s === 'en') return 'hi'
      if (s === 'hi') return 'ta'
      return 'en'
    })
  }

  return (
    <TranslationContext.Provider value={{ lang, setLanguage, toggleLanguage, t }}>
      {children}
    </TranslationContext.Provider>
  )
}

export const useTranslation = () => useContext(TranslationContext)

export default TranslationContext
