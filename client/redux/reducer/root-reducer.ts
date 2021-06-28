import { combineReducers } from 'redux';

import { topicReducer } from './topic.reducer';

export const rootReducer = combineReducers({
  topic: topicReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
