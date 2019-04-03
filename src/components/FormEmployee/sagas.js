import {
  take, fork, call, put,
} from 'redux-saga/effects';
import actions from 'store/features/employees/actions';
import types from 'store/features/employees/types';
import axios from 'axios';

/* --------------------- Watchers ------------------ */

const watchAddEmployee = function* () {
  while (true) {
    const { payload } = yield take(types.ADD_EMPLOYEE);
    yield fork(addEmployee, payload);
  }
};

export default { watchAddEmployee };

/* --------------------- Subroutines --------------- */

function* addEmployee({ employeer }) {
  try {
    yield put(actions.addEmployeeLoading());

    const url = 'https://randomuser.me/api/';
    const { status, data } = yield call(axios.get, url);

    if (status === 200) {
      const {
        name: { first, last },
        location: { street, city },
      } = data.results[0];

      const generatedPerson = {
        name: `${first} ${last}`,
        address: `${street}, ${city}`,
        employeer,
      };
      yield put(actions.addEmployeeSuccess(generatedPerson));
    } else {
      yield put(actions.addEmployeeError('There was an error adding a new employee'));
    }
  } catch (err) {
    yield put(actions.addEmployeeError('There was an error adding a new employee'));
  }
}
