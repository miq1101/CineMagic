import axios from 'axios';

import { accessToken } from '../apiUtils';

import { stringFormat } from '../../utils';
import { BASE_URL } from '../../../../config';
import { Endpoints, RequestTimeout } from '../../constants';

export const getPopularMoviesApi = (page = 1) => {
    return accessToken((authorization, language) => {
        return axios.get(
            stringFormat(`${BASE_URL}${Endpoints.popularMovies}`),
            {
                params: { language, page },
                headers: { authorization },
                timeout: RequestTimeout.timeout
            }
        );
    })
}

export const getUpcomingMoviesApi = (page = 1) => {
    return accessToken((authorization, language) => {
        return axios.get(
            stringFormat(`${BASE_URL}${Endpoints.upcomingMovies}`),
            {
                params: { language, page },
                headers: { authorization },
                timeout: RequestTimeout.timeout
            }
        );
    })
}

export const getPopularActorsApi = (page = 1) => {
    return accessToken((authorization, language) => {
        return axios.get(
            stringFormat(`${BASE_URL}${Endpoints.popularActors}`),
            {
                params: { language, page },
                headers: { authorization },
                timeout: RequestTimeout.timeout
            }
        );
    })
}

export const getTopRatedMoviesApi = (page = 1) => {
    return accessToken((authorization, language) => {
        return axios.get(
            stringFormat(`${BASE_URL}${Endpoints.topRated}`),
            {
                params: { language, page },
                headers: { authorization },
                timeout: RequestTimeout.timeout
            }
        );
    })
}

export const getMovieDetailsApi = (movieId) => {
    return accessToken((authorization, language) => {
        return axios.get(
            stringFormat(`${BASE_URL}${Endpoints.movieDetails}`, movieId),
            {
                params: { language },
                headers: { authorization },
                timeout: RequestTimeout.timeout
            }
        );
    })
}

export const getMovieActorsApi = (movieId) => {
    return accessToken((authorization, language) => {
        return axios.get(
            stringFormat(`${BASE_URL}${Endpoints.movieCredits}`, movieId),
            {
                params: { language },
                headers: { authorization },
                timeout: RequestTimeout.timeout
            }
        );
    })
}

export const getSimilarMoviesApi = (movieId) => {
    return accessToken((authorization, language) => {
        return axios.get(
            stringFormat(`${BASE_URL}${Endpoints.similarMovies}`, movieId),
            {
                params: { language },
                headers: { authorization },
                timeout: RequestTimeout.timeout
            }
        );
    })
}

// export const addFavoritesApi = (data) => {
//     return accessToken((authorization, userId) => {
//         return axios.post(stringFormat(`${BASE_URL}${Endpoints.favorites}`, userId), data, { headers: { authorization }, timeout: RequestTimeout.timeout });
//     })
// }

// export const deleteFavoriteApi = (favoriteId) => {
//     return accessToken((authorization, userId) => {
//         return axios.delete(stringFormat(`${BASE_URL}${Endpoints.deleteFavorite}`, [userId, favoriteId]), { headers: { authorization }, timeout: RequestTimeout.timeout });
//     })
// }