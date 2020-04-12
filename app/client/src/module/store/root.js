import { combineReducers } from 'redux';
import { userReducer as user } from './user';

export const reducers = combineReducers({
  user
});
