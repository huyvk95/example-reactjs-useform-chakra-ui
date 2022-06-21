import { createSlice } from '@reduxjs/toolkit';

import { Slice, State } from './types';

const initialState: State = {
  isSidebarCollapse: false,
};

// > Actions
// * Init slice
const slice: Slice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setRouterTitle: (state, payload) => {
      state.title = payload.payload;
    },
    toggleSidebarCollapse: (state) => ({
      ...state,
      isSidebarCollapse: !state.isSidebarCollapse,
    }),
  },
});

// * Saga effect

// > Export
// * Action
export const actions = { ...slice.actions };

// * Reducer
export const { reducer } = slice;
