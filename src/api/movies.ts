import { axiosMovies as axios } from '../utils/axios';
import { Actor, MovieInfo } from '../components/MovieDetails/types';
import { FetchMoviesSuccessPayload } from '../components/Movies/actions';

export const searchMovies = (query: string) => {
  return axios.get<FetchMoviesSuccessPayload>(`/search/movie`, {
    params: { query: query }
  });
};
