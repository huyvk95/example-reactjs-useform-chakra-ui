import { EmployeeModel, Transaction } from '@types';
import { PayloadAction, Slice as SlideType } from '@reduxjs/toolkit';

// > Redux
export type State = {
  employess: EmployeeModel[];
  transactionGetEmployees: Transaction;
  transactionAddEmployee: Transaction;
  transactionUpdateEmployee: Transaction;
  transactionDeleteEmployee: Transaction;
};

type Actions = {
  setEmployees: (state: State, payload: PayloadAction<EmployeeModel[]>) => void;
  resetTransactionGetEmployees: (state: State) => void;
  resetTransactionAddEmployee: (state: State) => void;
  resetTransactionUpdateEmployee: (state: State) => void;
  resetTransactionDeleteEmployee: (state: State) => void;
};

export type Slice = SlideType<State, Actions, 'employees'>;
