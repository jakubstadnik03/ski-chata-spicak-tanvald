// i18n.js

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import csTranslations from "./locales/cs.json";
import deTranslations from "./locales/de.json";
import enTranslations from "./locales/en.json";

const i18nOptions = {
  resources: {
    cs: {
      translation: csTranslations,
    },
    de: {
      translation: deTranslations,
    },
    en: {
      translation: enTranslations,
    },
  },
  fallbackLng: "cs",
  lng: "cs", // if you want Czech to be the default language
  // other options...
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init(i18nOptions);

// ...rest of the code

i18n.init({
  resources: {
    cs: {
      translation: csTranslations,
    },
    de: {
      translation: deTranslations,
    },
    en: {
      translation: enTranslations,
    },
  },
  fallbackLng: "cs",
  lng: "cs", // if you want Czech to be the default language
  // other options...
});
export default i18n;
