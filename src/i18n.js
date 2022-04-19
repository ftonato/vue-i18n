import { createI18n } from 'vue-i18n';
import { LANGUAGE } from './constants';
import YAML from 'yamljs';

const loadExternalResouce = async (language = LANGUAGE.ENGLISH) => {
  const URL = `https://poc-i18n.vercel.app/app-name-a/${language}/app.yaml`;
  const response = await fetch(URL);
  const data = await response.text();
  return data;
};

const i18n = createI18n({
  legacy: true,
  warnHtmlMessage: true,
  globalInjection: true,
  locale: LANGUAGE.DEFAULT,
  fallbackLocale: LANGUAGE.DEFAULT,
  messages: {
    [LANGUAGE.ENGLISH]: YAML.parse(await loadExternalResouce()),
    [LANGUAGE.PORTUGUESE]: YAML.parse(await loadExternalResouce(LANGUAGE.PORTUGUESE)),
  },
});

export default i18n;
