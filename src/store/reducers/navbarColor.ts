import { createSlice } from '@reduxjs/toolkit';

export const navbarColorSlice = createSlice({
  name: 'navbarColor',
  initialState: {
    value: 'navy',
  },
  reducers: {
    navbarColorStatus: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { navbarColorStatus } = navbarColorSlice.actions;

const navbarColorReduser = navbarColorSlice.reducer;
export default navbarColorReduser;
