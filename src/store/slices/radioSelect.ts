import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface RadioSelectState {
  selectedRadio: string;
}

const initialState: RadioSelectState = {
  selectedRadio: '',
};

export const radioSelectSlice = createSlice({
  name: 'radioSelect',
  initialState,
  reducers: {
    setSelectedRadio: (state, action: PayloadAction<string>) => ({
      ...state,
      selectedRadio: action.payload,
    })
  },
});

export const { setSelectedRadio } =
  radioSelectSlice.actions;

export default radioSelectSlice.reducer;
