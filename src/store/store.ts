import { configureStore } from '@reduxjs/toolkit';
import userStatusReduser from './reducers/userStatus';

const store = configureStore({
  reducer: {
    userStatus: userStatusReduser,
  },
});

export type ReduxType = ReturnType<typeof store.getState>;

export default store;
