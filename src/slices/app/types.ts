import { Slice as SlideType } from '@reduxjs/toolkit';

// > Redux
export type State = {
  isSidebarCollapse: boolean;
};

type Actions = {
  toggleSidebarCollapse: (state: State) => State;
};

export type Slice = SlideType<State, Actions, 'app'>;
