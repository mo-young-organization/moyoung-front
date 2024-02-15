import { createSlice } from '@reduxjs/toolkit';

export const myLocationSlice = createSlice({
  name: 'myLocation',
  initialState: {
    value: {
      mylocationX: 126.75993318746,
      mylocationY: 37.7131914882111,
    },
  },
  reducers: {
    myLocationStatus: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { myLocationStatus } = myLocationSlice.actions;

const myLocationReduser = myLocationSlice.reducer;
export default myLocationReduser;
