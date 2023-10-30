import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ToggleState {
  toggled: boolean;
}

const initialState: ToggleState = {
  toggled: false,
};

export const toggledSlice = createSlice({
  name: 'toggled',
  initialState,
  reducers: {
    setToggle: (state, action: PayloadAction<boolean>) => ({
      ...state,
      toggled: action.payload,
    }),
  },
});

export const { setToggle } = toggledSlice.actions;

export default toggledSlice.reducer;
