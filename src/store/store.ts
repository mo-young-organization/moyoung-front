import { configureStore } from '@reduxjs/toolkit';

import userStatusReduser from './reducers/userStatus';
import navbarColorReduser from './reducers/navbarColor';

const store = configureStore({
  reducer: {
    userStatus: userStatusReduser,
    navbarColor: navbarColorReduser,
  },
});

export type ReduxType = ReturnType<typeof store.getState>;

export default store;
