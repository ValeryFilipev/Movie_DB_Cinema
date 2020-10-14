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
