import { createSelector } from '@reduxjs/toolkit';

const selectSelf = (state: RootState) => state.employees;

export const selector = {
  selectEmployeesData: createSelector(selectSelf, (state) => state.employess),
};
