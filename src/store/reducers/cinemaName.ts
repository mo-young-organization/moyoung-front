import { createSlice } from '@reduxjs/toolkit';

export const cinemaNameSlice = createSlice({
  name: 'cinemaName',
  initialState: {
    value: [],
  },
  reducers: {
    setCinemaNameStatus: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setCinemaNameStatus } = cinemaNameSlice.actions;

const cinemaNameReduser = cinemaNameSlice.reducer;
export default cinemaNameReduser;
