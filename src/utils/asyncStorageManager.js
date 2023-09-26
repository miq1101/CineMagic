import AsyncStorage from '@react-native-async-storage/async-storage';

import { AsyncStorageKeys } from './constants';

// Get data from async storage
export const getData = (key) => {
    return AsyncStorage.getItem(key);
}

// Set data in array of objects
export const setData = async (key, data) => {
    const res = getData(key);
    const newProduct = res != null ? JSON.parse(res) : [];
    newProduct.push(data);
    try {
        const jsonValue = JSON.stringify(newProduct);
        AsyncStorage.setItem(key, jsonValue);
    } catch (_) {
        console.log('Failed to save the async storage.');
    }
}

// Clear data from array of objects
export const clearData = async (key, data) => {
    const res = await getData(key);
    let newProduct = res != null ? JSON.parse(res) : null;
    if (!!newProduct) {
        try {
            let index = -1;
            for (let i = 0; i < newProduct.length; i++) {
                if (JSON.stringify(newProduct[i]) === JSON.stringify(data)) {
                    index = i;
                }
            }
            if (index > -1) {
                newProduct.splice(index, 1);
            }
            const jsonValue = JSON.stringify(newProduct);
            AsyncStorage.setItem(key, jsonValue);
        } catch (_) {
            console.log('Failed to save the async storage.');
        }
    }
}

// Clear key
export const overwriteData = async (key, data) => {
    try {
        await AsyncStorage.setItem(key, data);
    } catch (_) {
        console.log('Failed to save the async storage.');
    }
}

// Clear all async storage
export const clearStorage = async () => {
    try {
        await AsyncStorage.clear();
    } catch (_) {
        console.log('Failed to clear the async storage.');
    }
}

export const removeKey = async (key) => {
    try {
        await AsyncStorage.removeItem(key);
    } catch (_) {
        console.log('Failed to remove key from the async storage.');
    }
}

export const getMultiKeys = async (keys) => {//keys = ['k1', 'k2']
    try {
        return await AsyncStorage.multiGet(keys);
    } catch (_) {
        console.log('Failed to multi Get from the async storage.');
    }
}

export const clearStorageWithoutKeys = async (keysObj) => { // eg. keysObj = { language: 'language' }
    try {
        const allKeys = await AsyncStorage.getAllKeys();
        allKeys.forEach(key => !keysObj[key] && removeKey(key));
    } catch (_) {
        console.log('Failed to multi remove from the async storage.')
    }
}

export const deleteFavoriteFromStorage = async (favoriteId) => {
    try {
        const itemsObject = await getData(AsyncStorageKeys.favoritesList) ?? '[]';
        const favoriteList = JSON.parse(itemsObject);
        const newList = favoriteList.map(({ id }) => favoriteId != id);
        await overwriteData(AsyncStorageKeys.favoritesList, JSON.stringify(newList));
    } catch (error) {
        console.log('Failed to remove Favorite url.', error);
    }
};