import { combineReducers } from '@reduxjs/toolkit';

import toolReducer from './tools';
import userReducer from './users';

const rootReducer = combineReducers({
  users: userReducer,
  tools: toolReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;