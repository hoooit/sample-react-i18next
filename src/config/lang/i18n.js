import i18n from "i18next"
import {initReactI18next} from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import translationEn from './translation.en'
import translationKo from './translation.ko'

const resource =  {
    en: {
        translation: translationEn
    },
    ko: {
        translation: translationKo
    }
};

i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        resources: resource,
        lng: "ko",
        fallbackLng: 'ko',
        // ns: ['translation'],
        // defaultNS: "translation",
        debug: true,
        keySeparator: false, // we do not use keys in form messages.welcome
        interpolation: {
            escapeValue: false // react already safes from xss
        },
        react: {
            wait: true,
        }
    });


export default i18n;