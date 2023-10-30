import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface DropdownState {
  selected: string;
}

const initialState: DropdownState = {
  selected: 'Dropdown option',
};

export const dropdownSlice = createSlice({
  name: 'dropdown',
  initialState,
  reducers: {
    setDropdown: (state, action: PayloadAction<string>) => ({
      ...state,
      selected: action.payload,
    })
  },
});

export const { setDropdown } = dropdownSlice.actions;

export default dropdownSlice.reducer;
