import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import inputsReducer from './slices/inputs.slice';
import checkboxReducer from './slices/checkbox.slice';
import toggleReducer from './slices/toggle.slice';
import radioSelectReducer from './slices/radioSelect';
import dropdownReducer from './slices/dropdown.slice';

const rootReducer = combineReducers({
  inputs: inputsReducer,
  checkox: checkboxReducer,
  toggled: toggleReducer,
  radio: radioSelectReducer,
  dropdown: dropdownReducer
});

const store = configureStore({
  reducer: rootReducer
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
