import types from './types';

const addCompany = payload => ({
  type: types.ADD_COMPANY,
  payload,
});

export default {
  addCompany,
};
