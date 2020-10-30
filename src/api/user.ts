import { axiosUser as axios } from '../utils/axios';
import { User } from '../components/Authentication/types';
import {
  LoginPayload,
  AuthSuccessPayload,
  SignupPayload
} from '../components/Authentication/actions';
import { WatchListItem } from '../components/Movies/types';

export const apiLogin = (payload: LoginPayload) =>
  axios.post<AuthSuccessPayload>('/auth/login', payload);

export const apiSignup = (payload: SignupPayload) =>
  axios.post<AuthSuccessPayload>('/auth/signup', payload);

export const apiLogout = () => axios.get('/auth/logout');

export const getUser = () => axios.get<User>('/user/me');

export const apiRemoveMovie = (id: number) =>
  axios.delete('/user/me/watch-list', { data: { movies: [id] } });

export const apiAddMovie = (item: WatchListItem) =>
  axios.post<{ watchList: WatchListItem[] }>('/user/me/watch-list', {
    movies: [item]
  });
