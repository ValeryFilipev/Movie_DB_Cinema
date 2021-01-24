import {
  LoginPayload,
  AuthSuccessPayload,
  SignupPayload
} from '../components/Authentication/actions';
import { User } from '../components/Authentication/types';
import { WatchListItem } from '../components/Movies/types';
import { axiosUser as axios } from './axios';
import { nativeApi } from './axios';

export const apiLogin = (payload: LoginPayload) =>
  nativeApi.post<AuthSuccessPayload>('/users/login', payload);

export const apiSignup = (payload: SignupPayload) =>
  nativeApi.post<AuthSuccessPayload>('/users/signup', payload);

export const apiLogout = () => axios.get('/auth/logout');

export const getUser = () => axios.get<User>('/user/me');

export const apiRemoveMovie = (id: number) =>
  axios.delete('/user/me/watch-list', { data: { movies: [id] } });

export const apiAddMovie = (item: WatchListItem) =>
  axios.post<{ watchList: WatchListItem[] }>('/user/me/watch-list', {
    movies: [item]
  });
