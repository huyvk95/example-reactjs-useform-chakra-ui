import { createSelector } from '@reduxjs/toolkit';

const selectSelf = (state: RootState) => state.app;

export const selector = {
  selectRouterTitle: createSelector(selectSelf, (state) => state.title),
  selectIsSidebarCollapse: createSelector(selectSelf, (state) => state.isSidebarCollapse),
};
