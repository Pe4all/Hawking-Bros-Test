import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CheckboxState {
  checked: boolean;
}

const initialState: CheckboxState = {
  checked: false,
};

export const checkboxSlice = createSlice({
  name: 'checkbox',
  initialState,
  reducers: {
    toggleCheckbox: (state, action: PayloadAction<boolean>) => ({
      ...state,
      checked: action.payload,
    })
  },
});

export const { toggleCheckbox } = checkboxSlice.actions;

export default checkboxSlice.reducer;
