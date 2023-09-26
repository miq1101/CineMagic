import i18next from 'i18next';
import { I18nManager } from "react-native";

import { EnLanguageResources } from './languages/en/index';
import { RuLanguageResources } from './languages/ru/index';

import { I18nLanguagesNames, I18nRTLLanguagesNames } from '../utils/constants';

export const resources = {
    [I18nLanguagesNames.en]: EnLanguageResources,
    [I18nLanguagesNames.ru]: RuLanguageResources,
};

export const setI18nConfig = (currentLocale = I18nLanguagesNames.en) => {
    I18nManager.forceRTL(currentLocale.indexOf(I18nRTLLanguagesNames.he) === 0 || currentLocale.indexOf(I18nRTLLanguagesNames.ar) === 0);
    i18next.init({
        compatibilityJSON: 'v3',
        fallbackLng: I18nLanguagesNames.en,
        lng: currentLocale,
        debug: true,
        resources,
        returnObjects: true,
    });
};

export const changeLanguage = (currentLocale = I18nLanguagesNames.en) => {
    i18next.changeLanguage(currentLocale);
};

export function t(name, key = 'ns', params = {}) {
    return i18next.t(name, { ...params, ns: key });
}