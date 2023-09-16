import { configureStore } from '@reduxjs/toolkit';
import memberIdReduser from './reducers/memberId';

export default configureStore({
  reducer: {
    memberId: memberIdReduser,
  },
});
