import { createSlice } from '@reduxjs/toolkit';

export const userStatusSlice = createSlice({
  name: 'userStatus',
  initialState: { value: "false" },
  reducers: {
    setUserStatus: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setUserStatus } = userStatusSlice.actions;

const userStatusReduser = userStatusSlice.reducer;
export default userStatusReduser;
