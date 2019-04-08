import { fork, put, call } from 'redux-saga/effects';
import { GET_USER_INFO_API, VALIDATE_ADDRESS_API } from 'src/actions/actions';
import apiSaga from './apiSaga';

export function* rootSaga() {
  yield fork(apiSaga);

  // const validAction = yield call(VALIDATE_ADDRESS_API,"209 derp derp St. Austin, Texas 78701");
  // const getAction = yield call(GET_USER_INFO_API);
  // debugger;
  // yield put(validAction);
  // yield put(getAction);


}