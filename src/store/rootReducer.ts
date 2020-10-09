import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import { combineReducers } from 'redux';
import { RootState } from 'StoreTypes';

const rootReducer = (history: History) =>
  combineReducers({
    router: connectRouter(history)
  });

export default rootReducer;
