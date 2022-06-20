import { PayloadAction, Slice as SlideType } from '@reduxjs/toolkit';

// > Redux
export type State = {
  isSidebarCollapse: boolean;
  isNetworkConnecting?: boolean;
};

type Actions = {
  toggleSidebarCollapse: (state: State) => State;
  setIsNetworkConnecting: (state: State, actions: PayloadAction<boolean>) => State;
};

export type Slice = SlideType<State, Actions, 'app'>;
