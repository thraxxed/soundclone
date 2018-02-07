import merge from 'lodash/merge';
import { RECEIVE_CURRENT_TRACK, RECEIVE_NEXT_TRACKS, SHIFT_NEXT_TRACK } from '../actions/player.js';

export default (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_CURRENT_TRACK:
      if (state.currentTrack && (action.currentTrack.id === state.currentTrack.id)) {
        let audioEl = document.getElementById('audio-element');
        audioEl.paused ? audioEl.play() :audioEl.pause();
      }
      newState = merge({}, state);
      newState['currentTrack'] = action.currentTrack;
      // console.log("new state:");
      // console.log(newState);
      return newState;
      // return action;
    case RECEIVE_NEXT_TRACKS:
      newState = merge({}, state, { nextTracks: action.nextTracks } );
      // newState['nextTracks'] = action.nextTracks;
      return newState;
    case SHIFT_NEXT_TRACK:
      console.log("remove the current track from next tracks");
      newState = merge({}, state);
      delete newState.nextTracks[`${state.currentTrack.id}`];
      return newState;
    default:
      return state;
  }
}
