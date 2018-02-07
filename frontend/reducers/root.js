import { combineReducers } from 'redux';
import sessionReducer from './session.js';
import errorsReducer from './errors.js';
import entitiesReducers from './entities_reducer.js';
import playerReducer from './player_reducer.js';

export default combineReducers({
  entities: entitiesReducers,
  session: sessionReducer,
  errors: errorsReducer,
  player: playerReducer
});
