import { configureStore } from '@reduxjs/toolkit';
import accessTokenReduser from './reducers/accessToken';

export default configureStore({
  reducer: {
    accessToken: accessTokenReduser,
  },
});
