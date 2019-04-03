import types from './types';
import { createDefaultReducer } from '../../helpers';

const initialState = {
  list: [],
  loading: false,
  error: '',

};

const addEmployeeLoading = state => ({ ...state, loading: true });

const addEmployeeSuccess = (state, payload) => ({
  ...state, loading: false, list: [...state.list, payload],
});

const addEmployeeError = (state, payload) => ({ ...state, loading: false, error: payload });

const actionMap = {
  [types.ADD_EMPLOYEE_LOADING]: addEmployeeLoading,
  [types.ADD_EMPLOYEE_SUCCESS]: addEmployeeSuccess,
  [types.ADD_EMPLOYEE_ERROR]: addEmployeeError,
};

export default createDefaultReducer(actionMap, initialState);
