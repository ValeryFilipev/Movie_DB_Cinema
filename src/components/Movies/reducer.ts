import { RootAction } from '../../store/rootAction';
import { moviesActionTypes } from './actions';
import { MoviesState } from './types';

export const initialState: MoviesState = {
  fetchingGenres: false,
  genres: {}
};

export default function(state: MoviesState = initialState, action: RootAction): MoviesState {
  switch (action.type) {
    case moviesActionTypes.FETCH_GENRES_REQUEST:
    case moviesActionTypes.FETCH_GENRES_FAIL:
      return {
        ...state,
        fetchingGenres: false
      };
    case moviesActionTypes.FETCH_GENRES_SUCCESS:
      return {
        ...state,
        genres: action.payload.genres.reduce(
          (acc, genre) => ({ ...acc, [genre.id]: genre.name }),
          {}
        )
      };
    default:
      return state;
  }
}
