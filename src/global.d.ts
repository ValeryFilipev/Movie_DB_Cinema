declare module 'StoreTypes' {
  import { ThunkAction } from 'redux-thunk';
  import { StateType, ActionType } from 'typesafe-actions';
  import { Path } from 'history';

  // https://github.com/supasate/connected-react-router/issues/286
  import { CallHistoryMethodAction, LocationState } from 'connected-react-router';

  type Push = (
    path: Path,
    state?: LocationState
  ) => CallHistoryMethodAction<[Path, LocationState?]>;
  interface RouterActions {
    push: Push;
  }

  export type Store = StateType<typeof import('./store/store').default>;
  export type RootAction =
    | ActionType<typeof import('./store/rootAction').default>
    | ActionType<RouterActions>;
  export type RootState = StateType<ReturnType<typeof import('./store/rootReducer').default>>;
  export type ThunkResult<R> = ThunkAction<R, RootState, undefined, RootAction>;
  export type StateSelector<T> = (state: RootState) => T;
}
