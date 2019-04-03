import { combineReducers } from 'redux';
import companies from 'store/features/companies';
import employees from 'store/features/employees';

const rootReducer = combineReducers({
  companies,
  employees,
});
export default rootReducer;