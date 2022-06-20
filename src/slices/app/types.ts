import { PayloadAction, Slice as SlideType } from '@reduxjs/toolkit';

// > Redux
export type State = {
  isNetworkConnecting?: boolean;
};

type Actions = {
  setIsNetworkConnecting: (state: State, actions: PayloadAction<boolean>) => State;
};

export type Slice = SlideType<State, Actions, 'app'>;
