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

export interface LoginFormValues {
  username: string;
  password: string;
}

export type LoginOnSubmit = (
  values: LoginFormValues,
  formikHelpers: FormikHelpers<LoginFormValues>
) => void;

export interface LoginDispatchProps {
  onSubmit: LoginOnSubmit;
}

export interface LoginOwnProps {
  goToSignup(): void;
}

export type LoginFormProps = LoginDispatchProps & LoginOwnProps;
