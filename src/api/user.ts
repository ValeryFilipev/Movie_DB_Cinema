import { axiosUser as axios } from '../utils/axios';
import { User } from '../components/Authentication/types';

export const apiLogout = () => axios.get('/auth/logout');

export const getUser = () => axios.get<User>('/user/me');
