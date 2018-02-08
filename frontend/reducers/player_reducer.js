import merge from 'lodash/merge';
import { RECEIVE_CURRENT_TRACK, RECEIVE_NEXT_TRACKS, SHIFT_NEXT_TRACK, PAUSE } from '../actions/player.js';

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
      newState['paused'] = false;

      // console.log(newState.currentTrack.title);


      if (newState.nextTracksArr) {
        for (var i = 0; i < newState.nextTracksArr.length; i++) {
          if (newState.nextTracksArr[i].id === newState.currentTrack.id) {
            newState.nextTracksArr = newState.nextTracksArr.slice(0, i).concat(newState.nextTracksArr.slice(i+1));
          }
        }
      }

      // console.log(newState.nextTracksArr);

      return newState;

    case RECEIVE_NEXT_TRACKS:


      newState = merge({}, state, { nextTracksArr: Object.values(action.nextTracks) } );
      // console.log("next tracks array");
      // console.log(newState.nextTracksArr);
      return newState;

    case SHIFT_NEXT_TRACK:

      // console.log("remove the current track from next tracks");
      newState = merge({}, state);
      // delete newState.nextTracks[`${state.currentTrack.id}`];
      newState.nextTracksArr = newState.nextTracksArr.slice(1)
      if (newState.nextTracksArr.length === 0) {
        console.log("hey");
      }
      return newState;

    case PAUSE:
      newState = merge({}, state);
      // newState['paused'] = !newState['paused'];
      newState['paused'] = document.getElementById('audio-element').paused;
      return newState;

    default:
      return state;
  }
}
