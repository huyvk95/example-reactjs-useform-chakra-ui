import { reducer as appReducer } from './app';
import { reducer as employeesReducer } from './employees';

export const reducer = {
  app: appReducer,
  employees: employeesReducer,
};
