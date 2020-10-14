import { axiosMovies as axios } from '../utils/axios';
import { FetchMoviesSuccessPayload, FetchGenresSuccessPayload } from '../components/Movies/actions';

export const searchMovies = (query: string) => {
  return axios.get<FetchMoviesSuccessPayload>(`/search/movie`, {
    params: { query: query }
  });
};

export const getGenres = () => axios.get<FetchGenresSuccessPayload>('/genre/movie/list');
