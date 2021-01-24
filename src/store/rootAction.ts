import { ActionType } from 'typesafe-actions';
import { routerActions } from 'connected-react-router';

import { authenticationActions } from '../components/Authentication/actions';
import { moviesActions } from '../components/Movies/actions';
import { movieDetailsActions } from '../components/MovieDetails/actions';

const rootAction = {
  router: routerActions,
  authentication: authenticationActions,
  movies: moviesActions,
  movieDetails: movieDetailsActions
};

export type RootAction = ActionType<typeof rootAction>;

export default rootAction;
