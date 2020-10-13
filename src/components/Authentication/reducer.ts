import { RootAction } from '../../store/rootAction';
import { authenticationActionTypes } from './actions';
import { AuthenticationState, User } from './types';

export const initialState: AuthenticationState = {
  loggingIn: false,
  signingUp: false
};

export default function(state = initialState, action: RootAction): AuthenticationState {
  switch (action.type) {
    case authenticationActionTypes.CLEAR:
      return initialState;
    default:
      return state;
  }
}
