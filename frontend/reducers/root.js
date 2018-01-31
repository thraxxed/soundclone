import { combineReducers } from 'redux';
import sessionReducer from './session.js';
import errorsReducer from './errors.js';

export default combineReducers({
  session: sessionReducer,
  errors: errorsReducer
});
