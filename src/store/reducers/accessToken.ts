import { createSlice } from '@reduxjs/toolkit';

export const accessTokenSlice = createSlice({
  name: 'accessToken',
  initialState: { value: '' },
  reducers: {
    accessToken: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { accessToken } = accessTokenSlice.actions;

const accessTokenReduser = accessTokenSlice.reducer;
export default accessTokenReduser;
