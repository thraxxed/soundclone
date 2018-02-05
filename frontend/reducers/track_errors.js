import {
  RECEIVE_TRACK_ERRORS,
  CLEAR_ERRORS
} from '../actions/track.js';

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TRACK_ERRORS:
      return ["Upload Failed."]
    case CLEAR_ERRORS:
      return [];
    default:
      return state;
  }
};
