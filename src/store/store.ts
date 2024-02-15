import { combineReducers, configureStore } from '@reduxjs/toolkit';

import userStatusReduser from './reducers/userStatus';
import navbarColorReduser from './reducers/navbarColor';
import myLocationReduser from './reducers/myLocation';

import sessionStorage from 'redux-persist/lib/storage/session';
import { persistReducer } from 'redux-persist';

const reducers = combineReducers({
  location: myLocationReduser,
});

const persistConfig = {
  // 타임 아웃 지정으로 로딩기다리지 않고 바로 ui표시
  // 해결 출처: https://github.com/rt2zz/redux-persist/issues/816
  timeout: 100,
  key: 'root',
  storage: sessionStorage,
  whitelist: ['location'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: {
    userStatus: userStatusReduser,
    navbarColor: navbarColorReduser,
    myLocation: persistedReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type ReduxType = ReturnType<typeof store.getState>;

export default store;
