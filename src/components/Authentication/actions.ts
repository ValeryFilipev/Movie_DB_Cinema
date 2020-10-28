import { action } from 'typesafe-actions';
import { FormikHelpers } from 'formik';
import { push } from 'connected-react-router';
import { ThunkResult } from 'StoreTypes';

import { apiLogin, apiLogout, getUser, apiSignup } from '../../api/user';
import { User, LoginFormValues, SignupFormValues } from './types';

export enum authenticationActionTypes {
  LOGIN_REQUEST = 'authentication/LOGIN_REQUEST',
  LOGIN_SUCCESS = 'authentication/LOGIN_SUCCESS',
  LOGIN_FAIL = 'authentication/LOGIN_FAIL',
  SIGNUP_REQUEST = 'authentication/SIGNUP_REQUEST',
  SIGNUP_SUCCESS = 'authentication/SIGNUP_SUCCESS',
  SIGNUP_FAIL = 'authentication/SIGNUP_FAIL',
  CLEAR = 'authentication/CLEAR'
}

export interface SignupPayload {
  username: string;
  email: string;
  password: string;
}

export interface LoginPayload {
  username: string;
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
  clear: () => action(authenticationActionTypes.CLEAR)
};

export const login = (
  values: LoginFormValues,
  formikHelpers: FormikHelpers<LoginFormValues>
): ThunkResult<void> => async (dispatch, getState) => {
  try {
    dispatch(authenticationActions.loginRequest());
    const { data } = await apiLogin({ ...values });
    dispatch(authenticationActions.loginSuccess(data));
    dispatch(push('/'));
  } catch (e) {
    if (e.response.status === 401) {
      formikHelpers.setFieldError('password', 'Invalid credentials');
    }
    formikHelpers.setSubmitting(false);
    dispatch(authenticationActions.loginFail({ error: e.response.statusText }));
  }
};

export const signup = (
  values: SignupFormValues,
  formikHelpers: FormikHelpers<SignupFormValues>
): ThunkResult<void> => async (dispatch, getState) => {
  try {
    dispatch(authenticationActions.signupRequest());
    const { data } = await apiSignup({ ...values });
    dispatch(authenticationActions.signupSuccess(data));
    dispatch(push('/'));
  } catch (e) {
    const { status } = e.response;
    if (status === 409) {
      formikHelpers.setFieldError('username', 'Username already in use');
    }
    if (status === 422) {
      formikHelpers.setFieldError('password', 'Please check your credentials');
    }
    formikHelpers.setSubmitting(false);
    dispatch(authenticationActions.signupFail({ error: e.response.statusText }));
  }
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
