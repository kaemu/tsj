import { createI18n } from 'vue-i18n'
import { messages } from './messages.js'

export const availableLocales = ['fr', 'en']

export { useI18n } from 'vue-i18n'

export const i18n = createI18n({
  messages,
  legacy: false,
  availableLocales,
  locale: 'en',
  fallbackLocale: 'fr'
})
