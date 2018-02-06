import { combineReducers } from 'redux';

import tracksReducer from './tracks_reducer.js';
import usersReducer from './users_reducer.js';
import commentsReducer from './comments_reducer.js';

export default combineReducers({
  tracks: tracksReducer,
  users: usersReducer,
  comments: commentsReducer
});
