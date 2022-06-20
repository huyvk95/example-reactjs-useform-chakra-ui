import { configureStore } from '@reduxjs/toolkit';

import { reducer } from '@slices';

// > Configure store
const store = configureStore({ reducer });

type StoreState = ReturnType<typeof store.getState>;
declare global {
  type RootState = StoreState;
}

export default store;
