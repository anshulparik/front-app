import { createSlice } from '@reduxjs/toolkit';

interface toolState {
  loading: boolean;
}

const initialState: toolState = {
  loading: false,
};

const toolSlice = createSlice({
  name: 'tools',
  initialState,
  reducers: {
    toogleLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { toogleLoading } = toolSlice.actions;

export default toolSlice.reducer;
