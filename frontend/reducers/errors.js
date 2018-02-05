import { combineReducers } from 'redux';

import session from './session_errors.js';
import tracks from './track_errors.js';

export default combineReducers({
  session,
  tracks
});
