import { createSlice } from '@reduxjs/toolkit';

import { Slice, State } from './types';

const initialState: State = {
  isSidebarCollapse: false,
  isNetworkConnecting: true,
};

// > Actions
// * Init slice
const slice: Slice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    toggleSidebarCollapse: (state) => ({
      ...state,
      isSidebarCollapse: !state.isSidebarCollapse,
    }),
    setIsNetworkConnecting: (state, action) => ({
      ...state,
      isNetworkConnecting: action.payload,
    }),
  },
});

// * Saga effect

// > Export
// * Action
export const actions = { ...slice.actions };

// * Reducer
export const { reducer } = slice;
