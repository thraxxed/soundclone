import { RECEIVE_CURRENT_TRACK } from '../actions/player.js';

export default (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_TRACK:
      return action;
    default:
      return state;
  }
}
