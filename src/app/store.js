import { combineReducers} from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import { boardReducer } from '../features/board/boardSlice.js';

const rootReducer = combineReducers({
  board: boardReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});