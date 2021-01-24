import axios from 'axios';
import casing from 'casing';

export const axiosMovies = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    // eslint-disable-next-line @typescript-eslint/camelcase
    api_key: process.env.REACT_APP_MOVIE_DB_API_KEY,
    language: 'en-US'
  }
});

export const axiosUser = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  withCredentials: true
});

export const nativeApi = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    Accept: "application/json",
    "Content-type": "application/json"
  }
});

if (process.env.NODE_ENV !== 'test') {
  axiosMovies.interceptors.response.use(casing.camelize);
}
