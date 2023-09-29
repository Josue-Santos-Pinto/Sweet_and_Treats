import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'user',
  initialState: {
    userID: '',
    name: '',
    email: '',
  },
  reducers: {
    setID: (state, action) => {
      state.userID = action.payload;
    },
    setName: (state, action) => {
      state.name = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
  },
});

export const { setID, setName, setEmail } = slice.actions;
export default slice.reducer;
