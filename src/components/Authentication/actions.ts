import { action } from 'typesafe-actions';
import { ThunkResult } from 'StoreTypes';

import { apiLogout } from '../../api/user';

export enum authenticationActionTypes {
  CLEAR = 'authentication/CLEAR'
}

export const authenticationActions = {
  clear: () => action(authenticationActionTypes.CLEAR)
};

export const logout = (): ThunkResult<any> => async (dispatch, getState) => {
  try {
    await apiLogout();
    dispatch(authenticationActions.clear());
  } catch (e) {
    //
  }
};
