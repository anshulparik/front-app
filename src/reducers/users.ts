import { createSlice } from '@reduxjs/toolkit';

interface userState {
  users: [];
}

const initialState: userState = {
  users: [],
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {

  },
});

export default userSlice.reducer;
