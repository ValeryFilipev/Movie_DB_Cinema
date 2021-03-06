import { push } from 'connected-react-router';
import { FormikHelpers } from 'formik';
import { action } from 'typesafe-actions';
import { ThunkResult } from 'StoreTypes';
import { setUserToStorage } from "../../helpers/setUserToStorage";
import { apiLogin, apiSignup } from '../../api/user';
import { WatchListItem } from '../Movies/types';
import { LoginFormValues, SignupFormValues, User } from './types';

export enum authenticationActionTypes {
  LOGIN_REQUEST = 'authentication/LOGIN_REQUEST',
  LOGIN_SUCCESS = 'authentication/LOGIN_SUCCESS',
  LOGIN_FAIL = 'authentication/LOGIN_FAIL',
  SIGNUP_REQUEST = 'authentication/SIGNUP_REQUEST',
  SIGNUP_SUCCESS = 'authentication/SIGNUP_SUCCESS',
  SIGNUP_FAIL = 'authentication/SIGNUP_FAIL',
  CLEAR = 'authentication/CLEAR',
  SET_WATCH_LIST = 'authentication/SET_WATCH_LIST'
}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface SignupPayload {
  name: string;
  email: string;
  password: string;
}

export interface AuthSuccessPayload {
  user: User;
}

export interface AuthFailPayload {
  error: string;
}

export const authenticationActions = {
  loginRequest: () => action(authenticationActionTypes.LOGIN_REQUEST),
  loginSuccess: (payload: AuthSuccessPayload) =>
    action(authenticationActionTypes.LOGIN_SUCCESS, payload),
  loginFail: (payload: AuthFailPayload) => action(authenticationActionTypes.LOGIN_FAIL, payload),
  signupRequest: () => action(authenticationActionTypes.SIGNUP_REQUEST),
  signupSuccess: (payload: AuthSuccessPayload) =>
    action(authenticationActionTypes.SIGNUP_SUCCESS, payload),
  signupFail: (payload: AuthFailPayload) => action(authenticationActionTypes.SIGNUP_FAIL, payload),
  clear: () => action(authenticationActionTypes.CLEAR),
  setWatchList: (watchList: WatchListItem[]) =>
    action(authenticationActionTypes.SET_WATCH_LIST, watchList)
};

export const login = (
  values: LoginFormValues,
  formikHelpers: FormikHelpers<LoginFormValues>
): ThunkResult<void> => async (dispatch, getState) => {
  try {
    dispatch(authenticationActions.loginRequest());
    const { data } = await apiLogin({ ...values });
    setUserToStorage(data);
    dispatch(authenticationActions.loginSuccess(data));
    dispatch(push('/'));
  } catch (e) {
    formikHelpers.setFieldError('password', e.message);
    formikHelpers.setSubmitting(false);
    dispatch(authenticationActions.loginFail({ error: e.message }));
  }
};

export const checkUser = (): ThunkResult<void> => async (dispatch, _) => {
  try {
    const storedData = JSON.parse(localStorage.getItem('userData')!);

    if (
      storedData &&
      storedData.token &&
      new Date(storedData.expiration) > new Date()
    ) {
      dispatch(authenticationActions.loginSuccess({ user: storedData }));
    }

    if (
      storedData &&
      storedData.token &&
      new Date(storedData.expiration) < new Date()
    ) {
      dispatch(logout());
    }

    if (!storedData || storedData.token) {
      logout();
    }
  } catch (e) {
    console.log(JSON.stringify(e));
  }
};

export const signup = (
  values: SignupFormValues,
  formikHelpers: FormikHelpers<SignupFormValues>
): ThunkResult<void> => async (dispatch, getState) => {
  try {
    dispatch(authenticationActions.signupRequest());
    const { data } = await apiSignup({ ...values });
    setUserToStorage(data);
    dispatch(authenticationActions.signupSuccess(data));
    dispatch(push('/'));
  } catch (e) {
    formikHelpers.setFieldError('password', e.response.statusText);
    formikHelpers.setSubmitting(false);
    dispatch(authenticationActions.loginFail({ error: e.response.statusText }));
  }
};

export const logout = (): ThunkResult<any> => async (dispatch, getState) => {
  try {
    localStorage.removeItem("userData");
    dispatch(authenticationActions.clear());
  } catch (e) {
    //
  }
};
