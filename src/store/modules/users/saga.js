import { call, put, select } from 'redux-saga/effects';
import { Creators } from './actions';
import { Creators as ErrorsCreators } from '../errors/actions';
import api from '../../../services/api';

export default function* addUser(action) {
  try {
    if (!action.payload.username) {
      yield put(ErrorsCreators.addError('Informe o nome do usuário'));
      return;
    }

    const { data } = yield call(api.get, `/${action.payload.username}`);

    const userAlreadyExists = yield select((state) =>
      state.users.users.find((user) => user.id === data.id)
    );

    const userDatas = {
      photo: data.avatar_url,
      username: data.login,
      name: data.name !== null ? data.name : data.login,
      id: data.id,
      coordinates: action.payload.coordinates,
    };

    if (!userAlreadyExists) {
      yield put(Creators.addUserSuccess(userDatas));
    } else {
      yield put(Creators.updateUser(userDatas));
    }
  } catch (err) {
    yield put(ErrorsCreators.addError('Não foi possível adicionar o usuário'));
  }
}
