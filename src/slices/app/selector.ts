import { createSelector } from '@reduxjs/toolkit';

const selectSelf = (state: RootState) => state.app;

export const selector = {
  selectIsNetworkConnecting: createSelector(selectSelf, (state) => state.isNetworkConnecting),
};
