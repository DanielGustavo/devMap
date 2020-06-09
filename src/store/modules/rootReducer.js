import { combineReducers } from 'redux';
import users from './users/reducer';
import usersAttacher from './usersAttacher/reducer';
import errors from './errors/reducer';

export default combineReducers({
  users,
  usersAttacher,
  errors,
});
