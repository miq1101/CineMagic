
import NetInfo from '@react-native-community/netinfo';

import { getData, removeKey } from './asyncStorageManager';

import { ApiResponseStatuses, AsyncStorageKeys, KeyboardTypes, Routes } from './constants';

import { navigationRef } from '../../navigation';

export const createTextInputOptions = (field) => {
    switch (field) {
        case 'email':
            return { keyboardType: KeyboardTypes.email };
        case 'fullName':
            return { keyboardType: KeyboardTypes.default };
        default:
            return { keyboardType: KeyboardTypes.default, secureTextEntry: true };
    }
}

export const showErrorMessage = async (err) => {
    const status = err?.response?.status;
    if (status && status == ApiResponseStatuses.unauthorized) {
        userLogoutWhenInvalidSignature();
    }
    if (err?.response) {
        console.log('API call Error: ', err.response);
        return;
    }
    console.log('Error: ', err);
}

export const userLogoutWhenInvalidSignature = async () => {
    removeKey(AsyncStorageKeys.user);
    navigationRef.reset({
        index: 0,
        routes: [{ name: Routes.signIn }],
    });
}

export const addNetInfoEventListener = (setDisabledState) => {
    let isConnected = true;
    return NetInfo.addEventListener(state => {
        // WILL_BE FIX getting of the `isInternetReachable` prop
        if (state.isConnected) {
            // if (state.isConnected && state.isInternetReachable) {
            if (!isConnected) {
                isConnected = true;
                setDisabledState(false);
            }
        } else if (isConnected) {
            setDisabledState(true);
            isConnected = false;
        }
    });
}

export const generateUUID = () => {
    let dt = new Date().getTime();
    const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        const r = (dt + Math.random() * 16) % 16 | 0;
        dt = Math.floor(dt / 16);
        return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;
}

export const stringFormat = (string, values) => {
    values = [].concat(values || []);
    for (let value of values) {
        string = string.replace('%S', value);
    }
    return string;
}


export const getAsyncStorageParsedData = async (key) => {
    const res = await getData(key);
    if (res) return JSON.parse(res);
    return res;
}