import { configureStore } from '@reduxjs/toolkit';
import userStatusReduser from './reducers/userStatus';
import navbarColorReduser from './reducers/navbarColor';
import myLocationReduser from './reducers/myLocation';

const store = configureStore({
  reducer: {
    userStatus: userStatusReduser,
    navbarColor: navbarColorReduser,
    myLocation: myLocationReduser,
  },
});

export type ReduxType = ReturnType<typeof store.getState>;

export default store;
