import I18n from "i18n-js";
import en from "./lang/en";

const supportedLanguages = [
  {
    code: "en",
    label: "English",
    translations: en
  }
];

I18n.defaultLocale = "en";
supportedLanguages.forEach(lang => {
  I18n.translations[lang.code] = lang.translations;
});

export const languageOptions = supportedLanguages.map(lang => ({
  value: lang.code,
  label: lang.label
}));

export const setLocale = locale => {
  I18n.locale = locale;
};

export const t = (name, params = {}) => {
  return I18n.t(name, params);
};

export const Trans = props => (
  <span
    dangerouslySetInnerHTML={{ __html: t(props.i18nKey, { ...props }) }}
  ></span>
);
