import { PayloadAction, Slice as SlideType } from '@reduxjs/toolkit';

// > Redux
export type State = {
  title?: string;
  isSidebarCollapse: boolean;
};

type Actions = {
  setRouterTitle: (state: State, payload: PayloadAction<string | undefined>) => void;
  toggleSidebarCollapse: (state: State) => State;
};

export type Slice = SlideType<State, Actions, 'app'>;
