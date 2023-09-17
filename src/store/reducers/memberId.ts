import { createSlice } from '@reduxjs/toolkit';

export const memberIdSlice = createSlice({
  name: 'memberId',
  initialState: { value: 0 },
  reducers: {
    setMemberId: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setMemberId } = memberIdSlice.actions;

const memberIdReduser = memberIdSlice.reducer;
export default memberIdReduser;
