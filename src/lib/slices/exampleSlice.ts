// util/slices/exampleSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ExampleState {
  value: boolean;
}

const initialState: ExampleState = {
  value: true,
};

const exampleSlice = createSlice({
  name: 'example',
  initialState,
  reducers: {
    increment: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload;
    },
    // decrement: (state) => {
    //   state.value -= 1;
    // },
  },
});

export const { increment } = exampleSlice.actions;
export default exampleSlice.reducer;
