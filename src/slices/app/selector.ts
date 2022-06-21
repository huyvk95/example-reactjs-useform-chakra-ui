import { createSelector } from '@reduxjs/toolkit';

const selectSelf = (state: RootState) => state.app;

export const selector = {
  selectIsSidebarCollapse: createSelector(selectSelf, (state) => state.isSidebarCollapse),
};
