import { combineReducers } from 'redux';
import sessionReducer from './session.js'

export default combineReducers({
  session: sessionReducer
});
