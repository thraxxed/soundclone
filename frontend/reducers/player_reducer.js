import { RECEIVE_CURRENT_TRACK } from '../actions/player.js';

export default (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_TRACK:
      console.log(action);
      if (state.currentTrack && (action.currentTrack.id === state.currentTrack.id)) {
        let audioEl = document.getElementById('audio-element');
        audioEl.paused ? audioEl.play() :audioEl.pause();
      }
      return action;
    default:
      return state;
  }
}
