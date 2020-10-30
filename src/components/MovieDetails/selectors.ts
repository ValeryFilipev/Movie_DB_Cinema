import { StateSelector } from 'StoreTypes';
import { prop, pathOr, propEq } from 'ramda';
import { Genre } from '../Movies/types';
import { createSelector } from 'reselect';

import { getWatchList } from '../Movies/selectors';
import { MovieInfo, MovieDetailsState } from './types';

export const getMovieId: StateSelector<number | null> = pathOr(null, [
  'movieDetails',
  'movieInfo',
  'id'
]);

export const getMovieInfo: StateSelector<MovieInfo | null> = pathOr(null, [
  'movieDetails',
  'movieInfo'
]);

export const getIsInWatchList: StateSelector<boolean> = createSelector(
  [getMovieId, getWatchList],
  (id, watchList) => {
    return watchList.find(propEq('id', id)) !== undefined;
  }
);

export const getMovieDetails: StateSelector<MovieDetailsState> = prop(
  'movieDetails'
);

export const getGenres: StateSelector<Genre[]> = pathOr(
  [],
  ['movies', 'genres']
);
