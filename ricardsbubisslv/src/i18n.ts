import { createI18n } from 'vue-i18n'

import en from '@/locales/en.json'
import lv from '@/locales/lv.json'

export const i18n = createI18n({
    legacy: false,
    locale: localStorage.getItem('locale') || 'en',
    globalInjection: true,
    messages: {
        lv, 
        en
    }
})