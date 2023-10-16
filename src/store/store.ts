import { configureStore } from '@reduxjs/toolkit';
import userStatusReduser from './reducers/userStatus';
import cinemaNameReduser from './reducers/cinemaName';

const store = configureStore({
  reducer: {
    userStatus: userStatusReduser,
    cinemaName: cinemaNameReduser,
  },
});

export type ReduxType = ReturnType<typeof store.getState>;

export default store;
