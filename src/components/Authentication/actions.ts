import { action } from 'typesafe-actions';
import { ThunkResult } from 'StoreTypes';

import { apiLogout, getUser } from '../../api/user';
import { User } from './types';

export enum authenticationActionTypes {
  LOGIN_SUCCESS = 'authentication/LOGIN_SUCCESS',
  CLEAR = 'authentication/CLEAR'
}

export interface AuthSuccessPayload {
  user: User;
}

export const authenticationActions = {
  loginSuccess: (payload: AuthSuccessPayload) =>
    action(authenticationActionTypes.LOGIN_SUCCESS, payload),
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

export const checkUser = (): ThunkResult<void> => async (dispatch, _) => {
  try {
    const { data } = await getUser();
    dispatch(authenticationActions.loginSuccess({ user: data }));
  } catch (e) {
    console.log(JSON.stringify(e));
  }
};
