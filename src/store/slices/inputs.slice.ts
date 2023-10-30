import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthorsSelectState {
  inputName: string;
  inputPassword: string;
  inputText: string;
}

const initialState: AuthorsSelectState = {
  inputName: '',
  inputPassword: '',
  inputText:'',
};

export const inputsSlice = createSlice({
  name: 'inputs',
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => ({
      ...state,
      inputName: action.payload,
    }),
    setPassword: (state, action: PayloadAction<string>) => ({
      ...state,
      inputPassword: action.payload,
    }),
    setText: (state, action: PayloadAction<string>) => ({
      ...state,
      inputText: action.payload,
    }),
  },
});

export const { setName, setPassword, setText } =
  inputsSlice.actions;

export default inputsSlice.reducer;
