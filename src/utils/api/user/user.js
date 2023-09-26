
// import axios from 'axios';
// import { BASE_URL } from '../../../../config';

// import { accessToken } from '../apiUtils';
// import { stringFormat } from '../../utils';
// import { Endpoints, Host, RequestTimeout } from "../../constants";

// export const getUser = () => {
//     return accessToken((authorization, userId) => {
//         return axios.get(stringFormat(`${BASE_URL}${Endpoints.user}`, userId), { headers: { authorization }, timeout: RequestTimeout.timeout });
//     })
// }

// export const deleteAccountApi = () => {
//     return accessToken((authorization, userId) => {
//         return axios.delete(stringFormat(`${BASE_URL}${Endpoints.user}`, userId), { headers: { authorization }, timeout: RequestTimeout.timeout });
//     })
// }

// export const changePasswordApi = (data) => {
//     return accessToken((authorization) => {
//         return axios.post(`${BASE_URL}${Endpoints.changePassword}`, data, { headers: { authorization }, timeout: RequestTimeout.timeout });
//     })
// }