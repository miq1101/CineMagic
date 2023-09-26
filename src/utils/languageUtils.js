import { setI18nConfig } from '../locales';
import { NativeModules } from 'react-native';

import { getData, overwriteData } from './asyncStorageManager';

import { AsyncStorageKeys, DEVICE_SETTINGS, I18nLanguagesNames } from './constants';

export const setLanguage = async () => {
    let language = await getData(AsyncStorageKeys.language);
    if (language == null || language == undefined) {
        try {
            language = DEVICE_SETTINGS.isIOS
                ? NativeModules.SettingsManager.settings.AppleLocale || NativeModules.SettingsManager.settings.AppleLanguages[0]
                : NativeModules.I18nManager.localeIdentifier;
            const deviceLanguageSuffix = language?.split("_")[0];
            overwriteData(AsyncStorageKeys.language, I18nLanguagesNames[deviceLanguageSuffix] || I18nLanguagesNames.en);
            if (I18nLanguagesNames[deviceLanguageSuffix]) {
                language = I18nLanguagesNames[deviceLanguageSuffix];
            }
        } catch (error) {
            // implementAnalytics(AnalyticsKeys.deviceLanguageDetectionError, { [AnalyticsCustomDimensions.errorMsg]: JSON.stringify(error) });
            console.log('Device language detection Error: ', error)
        }

    }
    setI18nConfig(language);
}