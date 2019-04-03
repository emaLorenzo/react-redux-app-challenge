import types from './types';

export const addEmployee = payload => ({
  type: types.ADD_EMPLOYEE,
  payload,
});

export const addEmployeeLoading = () => ({
  type: types.ADD_EMPLOYEE_LOADING,
});

export const addEmployeeSuccess = payload => ({
  type: types.ADD_EMPLOYEE_SUCCESS,
  payload,
});

export const addEmployeeError = payload => ({
  type: types.ADD_EMPLOYEE_ERROR,
  payload,
});

export default {
  addEmployee, addEmployeeLoading, addEmployeeSuccess, addEmployeeError,
};
