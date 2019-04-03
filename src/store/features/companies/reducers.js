import types from './types';
import { createDefaultReducer } from '../../helpers';

const initialState = {
  list: [],
  error: '',
};

const addCompanyHandler = (state, payload) => {
  const companyExists = state.list.find(company => company.name === payload.name);
  if (companyExists) {
    return { ...state, error: 'Company name already exists' };
  }
  return { ...state, error: '', list: [...state.list, payload] };
};

const actionMap = {
  [types.ADD_COMPANY]: addCompanyHandler,
};

export default createDefaultReducer(actionMap, initialState);
