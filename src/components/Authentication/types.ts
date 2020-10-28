import { FormikHelpers } from 'formik';
import { WatchListItem } from '../Movies/types';

export interface User {
  id: string;
  username: string;
  watchList: WatchListItem[];
}

export interface AuthenticationState {
  user?: User;
  loggingIn: boolean;
  signingUp: boolean;
}

export interface SignupFormValues {
  username: string;
  email: string;
  password: string;
}

export interface LoginFormValues {
  username: string;
  password: string;
}

export type SignupOnSubmit = (
  values: SignupFormValues,
  formikHelpers: FormikHelpers<SignupFormValues>
) => void;

export type LoginOnSubmit = (
  values: LoginFormValues,
  formikHelpers: FormikHelpers<LoginFormValues>
) => void;

export interface SignupDispatchProps {
  onSubmit: SignupOnSubmit;
}

export interface LoginDispatchProps {
  onSubmit: LoginOnSubmit;
}

export interface SignupOwnProps {
  goToLogin(): void;
}

export interface LoginOwnProps {
  goToSignup(): void;
}

export type SignupFormProps = SignupDispatchProps & SignupOwnProps;

export type LoginFormProps = LoginDispatchProps & LoginOwnProps;
