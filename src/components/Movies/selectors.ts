import { prop } from 'ramda';
import { RootState } from 'StoreTypes';

import { MoviesState } from './types';

export const getMoviesPage: (state: RootState) => MoviesState = prop('movies');
