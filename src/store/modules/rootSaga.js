import { all, takeLatest } from 'redux-saga/effects';
import addUser from './users/saga';

export default function* sagaRoot() {
  yield all([takeLatest('users/ADD_REQUEST', addUser)]);
}
