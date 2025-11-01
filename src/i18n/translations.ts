// Re-export existing JS translations with a permissive type to enable gradual typing.
export type Locale = 'en' | 'hi' | 'ta'
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Translations = Record<Locale, any>

// Import the JS dictionary (allowed via allowJs in tsconfig)
// @ts-ignore - JS module without types
import translationsJS from './translations.js'
const dict = translationsJS as unknown as Translations
export default dict
