import { createSlice } from '@reduxjs/toolkit';

import { Slice, State } from './types';

const initialState: State = {
  isNetworkConnecting: true,
};

// > Actions
// * Init slice
const slice: Slice = createSlice({
  name: 'app',
  initialState,
  reducers: {
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
