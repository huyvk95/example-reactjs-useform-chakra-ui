import { createAsyncThunk } from '@reduxjs/toolkit';

import { api } from '@services';

export const getEmployees = createAsyncThunk('employees/getEmployees', async () => {
  try {
    const data = await api.getEmployees();
    return data;
  } catch (error) {
    // eslint-disable-next-line
    console.error(error);
  }
});

export const addEmployee = createAsyncThunk(
  'employees/addEmployee',
  async (params: Parameters<typeof api.addEmployee>[0], thunkApi) => {
    try {
      await api.addEmployee(params);
      thunkApi.dispatch(getEmployees());
    } catch (error) {
      // eslint-disable-next-line
      console.error(error);
    }
  },
);

export const updateEmployee = createAsyncThunk(
  'employees/updateEmployee',
  async (params: Parameters<typeof api.updateEmployee>[0], thunkApi) => {
    try {
      await api.updateEmployee(params);
      thunkApi.dispatch(getEmployees());
    } catch (error) {
      // eslint-disable-next-line
      console.error(error);
    }
  },
);

export const deleteEmployee = createAsyncThunk(
  'employees/deleteEmployee',
  async (params: Parameters<typeof api.deleteEmployee>[0], thunkApi) => {
    try {
      await api.deleteEmployee(params);
      thunkApi.dispatch(getEmployees());
    } catch (error) {
      // eslint-disable-next-line
      console.error(error);
    }
  },
);
