import { all, fork } from 'redux-saga/effects';
import employeeSagas from 'components/FormEmployee/sagas';

export default function* rootSaga() {
  yield all([
    fork(employeeSagas.watchAddEmployee),
  ]);
}
