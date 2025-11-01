import React, { createContext, useContext, useEffect, useState } from 'react'
import translations from '../i18n/translations'

export type Language = 'en' | 'hi' | 'ta'

export interface TranslationContextValue {
  lang: Language | string
  setLanguage: (l: Language | string) => void
  toggleLanguage: () => void
  t: (key: string, fallback?: string) => string
}

const TranslationContext = createContext<TranslationContextValue | undefined>(undefined)

interface ProviderProps {
  children?: React.ReactNode
}

export const TranslationProvider: React.FC<ProviderProps> = ({ children }) => {
  const [lang, setLang] = useState<Language | string>(() => {
    try {
      return localStorage.getItem('ipl_lang') || 'en'
    } catch (e) {
      return 'en'
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem('ipl_lang', String(lang))
    } catch (e) {}
    try {
      // Reflect language on the <html> element for language-specific CSS overrides
      if (typeof document !== 'undefined') {
        const el = document.documentElement
        el.setAttribute('lang', String(lang))
        el.classList.toggle('lang-ta', String(lang) === 'ta')
      }
    } catch (e) {}
  }, [lang])

  const t = (key: string, fallback?: string) => {
    if (!key) return ''
    const parts = key.split('.')
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let cur: any = (translations as Record<string, unknown>)[String(lang)]
    for (const p of parts) {
      if (!cur) break
      cur = (cur as Record<string, unknown>)[p]
    }
    if (cur == null) return fallback ?? key
    return String(cur)
  }

  const setLanguage = (l: Language | string) => setLang(l)
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

export const useTranslation = (): TranslationContextValue => {
  const ctx = useContext(TranslationContext)
  if (!ctx) {
    // This makes hook usage outside the provider clear in development while keeping runtime safe.
    throw new Error('useTranslation must be used within a TranslationProvider')
  }
  return ctx
}

export default TranslationContext
