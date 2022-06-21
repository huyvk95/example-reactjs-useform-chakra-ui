import { createSelector } from '@reduxjs/toolkit';

const selectSelf = (state: RootState) => state.employees;

export const selector = {
  selectEmployeesData: createSelector(selectSelf, (state) => state.employess),
  selectTransactionGetEmployees: createSelector(selectSelf, (state) => state.transactionGetEmployees),
  selectTransactionAddEmployee: createSelector(selectSelf, (state) => state.transactionAddEmployee),
  selectTransactionUpdateEmployee: createSelector(selectSelf, (state) => state.transactionUpdateEmployee),
  selectTransactionDeleteEmployee: createSelector(selectSelf, (state) => state.transactionDeleteEmployee),
};
