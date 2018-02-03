// import { postTrack, fetchAllTracks, deleteTrack } from '../utils/track_util.js';
import * as TrackUtil from '../utils/track_util.js';

export const RECEIVE_ALL_TRACKS = 'RECEIVE_ALL_TRACKS';
export const REMOVE_TRACK = 'REMOVE_TRACK';

const receiveAllTracks = payload => ({
  type: RECEIVE_ALL_TRACKS,
  payload
});

const removeTrack = trackId => ({
  type: REMOVE_TRACK,
  trackId
});

export const requestAllTracks = () => dispatch => {
  return TrackUtil.fetchAllTracks().then(payload => dispatch(receiveAllTracks(payload)));
};

export const createNewTrack = formTrack => dispatch => {
  return TrackUtil.postTrack(formTrack);
};

export const deleteTrack = trackId => dispatch => (
  TrackUtil.deleteTrack(trackId).then(track => dispatch(removeTrack(track)))
);
