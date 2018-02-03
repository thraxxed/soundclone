import merge from 'lodash/merge';

import { RECEIVE_ALL_TRACKS, REMOVE_TRACK } from '../actions/track.js';

const tracksReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_ALL_TRACKS:
      return merge({}, state, action.payload.tracks);
    case REMOVE_TRACK:
      newState = merge({}, state);
      let deletedId = Object.keys(action.trackId.tracks)[0];
      delete newState[`${deletedId}`];
      return newState;
    default:
      return state;
  }
}

export default tracksReducer;
