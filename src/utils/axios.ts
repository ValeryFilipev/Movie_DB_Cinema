import axios from 'axios';

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
