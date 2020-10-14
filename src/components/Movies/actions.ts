import { action } from 'typesafe-actions';
import { Movie } from './types';
import { ThunkResult } from 'StoreTypes';
import { Genre } from './types';
import { getGenres } from '../../api/movies';

export enum moviesActionTypes {
  FETCH_GENRES_REQUEST = 'movies/FETCH_GENRES_REQUEST',
  FETCH_GENRES_SUCCESS = 'movies/FETCH_GENRES_SUCCESS',
  FETCH_GENRES_FAIL = 'movies/FETCH_GENRES_FAIL'
}

export interface FetchMoviesSuccessPayload {
  page: number;
  results: Movie[];
  totalResults: number;
  totalPages: number;
}

export type FetchGenresSuccessPayload = { genres: Genre[] };

export const moviesActions = {
  fetchGenresRequest: () => action(moviesActionTypes.FETCH_GENRES_REQUEST),
  fetchGenresSuccess: (payload: FetchGenresSuccessPayload) =>
    action(moviesActionTypes.FETCH_GENRES_SUCCESS, payload),
  fetchGenresFail: (error: string) => action(moviesActionTypes.FETCH_GENRES_FAIL, error)
};

export const fetchGenres = (): ThunkResult<void> => async (dispatch, getState) => {
  try {
    const state = getState();
    const a = state.movies.genres;
    if (state.movies.fetchingGenres || Object.keys(a).length !== 0) {
      return;
    }
    dispatch(moviesActions.fetchGenresRequest());

    const { data } = await getGenres();

    dispatch(moviesActions.fetchGenresSuccess(data));
  } catch (e) {
    dispatch(moviesActions.fetchGenresFail("Couldn't get genres"));
    console.log(e);
  }
};
