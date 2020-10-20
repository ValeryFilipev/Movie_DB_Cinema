import { axiosMovies as axios } from '../utils/axios';
import {
  FetchMoviesSuccessPayload,
  FetchGenresSuccessPayload,
  FetchMoviesPayload
} from '../components/Movies/actions';
import { Actor, MovieInfo } from '../components/MovieDetails/types';
import camelToSnake from '../utils/camelToSnake';

export const searchMovies = (query: string) => {
  return axios.get<FetchMoviesSuccessPayload>(`/search/movie`, {
    params: { query: query }
  });
};

export const getGenres = () =>
  axios.get<FetchGenresSuccessPayload>('/genre/movie/list');

export const getMovies = ({ filter = 'popular', page }: FetchMoviesPayload) => {
  const filterSnakeCase = camelToSnake(filter);
  return axios.get<FetchMoviesSuccessPayload>(`/movie/${filterSnakeCase}`, {
    params: {
      page
    }
  });
};

export const getMovie = (id: number) => axios.get<MovieInfo>(`/movie/${id}`);

export const getImages = (id: number) =>
  axios.get<{ id: number; backdrops: { filePath: string }[] }>(`/movie/${id}/images`, {
    params: { language: 'null' }
  });

export const getCredits = (id: number) =>
  axios.get<{ id: number; cast: Actor[] }>(`/movie/${id}/images`);