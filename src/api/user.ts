import { axiosUser as axios } from '../utils/axios';

export const apiLogout = () => axios.get('/auth/logout');
