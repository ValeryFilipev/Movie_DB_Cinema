import { ActionType } from 'typesafe-actions';
import { routerActions } from 'connected-react-router';

import { authenticationActions } from '../components/Authentication/actions';
import { moviesActions } from '../components/Movies/actions';

const rootAction = {
  router: routerActions,
  authentication: authenticationActions,
  movies: moviesActions
};

export type RootAction = ActionType<typeof rootAction>;

export default rootAction;
