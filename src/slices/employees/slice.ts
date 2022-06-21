import { createSlice } from '@reduxjs/toolkit';
import { addEmployee, deleteEmployee, getEmployees, updateEmployee } from './thunk';

import { Slice, State } from './types';

const initialState: State = {
  employess: [],
  transactionGetEmployees: { type: 'created' },
  transactionAddEmployee: { type: 'created' },
  transactionUpdateEmployee: { type: 'created' },
  transactionDeleteEmployee: { type: 'created' },
};

// > Actions
// * Init slice
const slice: Slice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    setEmployees(state, payload) {
      state.employess = payload.payload;
    },
  },
  extraReducers: (builder) => {
    // * GetEmployees
    builder.addCase(getEmployees.fulfilled, (state, actions) => {
      state.transactionGetEmployees = { type: 'finish' };
      state.employess = actions.payload || [];
    });
    builder.addCase(getEmployees.pending, (state) => {
      state.transactionGetEmployees = { type: 'pending' };
    });
    builder.addCase(getEmployees.rejected, (state) => {
      state.transactionGetEmployees = { type: 'finish' };
    });
    // * AddEmployee
    builder.addCase(addEmployee.fulfilled, (state) => {
      state.transactionAddEmployee = { type: 'finish' };
    });
    builder.addCase(addEmployee.pending, (state) => {
      state.transactionAddEmployee = { type: 'pending' };
    });
    builder.addCase(addEmployee.rejected, (state) => {
      state.transactionAddEmployee = { type: 'finish' };
    });
    // * UpdateEmployee
    builder.addCase(updateEmployee.fulfilled, (state) => {
      state.transactionUpdateEmployee = { type: 'finish' };
    });
    builder.addCase(updateEmployee.pending, (state) => {
      state.transactionUpdateEmployee = { type: 'pending' };
    });
    builder.addCase(updateEmployee.rejected, (state) => {
      state.transactionUpdateEmployee = { type: 'finish' };
    });
    // * DeleteEmployee
    builder.addCase(deleteEmployee.fulfilled, (state) => {
      state.transactionDeleteEmployee = { type: 'finish' };
    });
    builder.addCase(deleteEmployee.pending, (state) => {
      state.transactionDeleteEmployee = { type: 'pending' };
    });
    builder.addCase(deleteEmployee.rejected, (state) => {
      state.transactionDeleteEmployee = { type: 'finish' };
    });
  },
});

// * Saga effect

// > Export
// * Action
export const actions = { ...slice.actions };

// * Reducer
export const { reducer } = slice;
