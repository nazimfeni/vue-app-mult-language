import { createI18n } from 'vue-i18n'

import en from './locales/en.json'
import bn from './locales/bn.json'

const messages = { en, bn }



const i18n = createI18n({
  legacy: false, // Use Composition API
  globalInjection: true, // Allow $t in templates
  locale: 'en',  // default language
  fallbackLocale: 'en',
  messages
})

export default i18n