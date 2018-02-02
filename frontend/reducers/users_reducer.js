import merge from 'lodash/merge';

import { RECEIVE_ALL_TRACKS } from '../actions/track.js';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_TRACKS:
      return merge({}, state, action.payload.users);
    default:
      return state;
  }
}

export default usersReducer;
