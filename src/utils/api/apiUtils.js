import { API_KEY } from "../../../config";
import { AsyncStorageKeys } from "../constants";
import { getData } from "../asyncStorageManager";

export const accessToken = async (callback) => {
    const authorization = `Bearer ${API_KEY}`;
    const language = await getData(AsyncStorageKeys.language);
    return callback(authorization, language);
}