import { StateSelector } from 'StoreTypes';
import { pathOr } from 'ramda';
import { Genre } from '../Movies/types';

export const getGenres: StateSelector<Genre[]> = pathOr([], ['movies', 'genres']);

export const getMovieId: StateSelector<number | null> = pathOr(null, [
  'movieDetails',
  'movieInfo',
  'id'
]);
