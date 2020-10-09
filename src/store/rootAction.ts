import { ActionType } from 'typesafe-actions';
import { routerActions } from 'connected-react-router';

const rootAction = {
  router: routerActions
};

export type RootAction = ActionType<typeof rootAction>;

export default rootAction;
