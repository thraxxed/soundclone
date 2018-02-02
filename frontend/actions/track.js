import { postTrack, fetchAllTracks } from '../utils/track_util.js';

export const RECEIVE_ALL_TRACKS = 'RECEIVE_ALL_TRACKS';

export const receiveAllTracks = payload => ({
  type: RECEIVE_ALL_TRACKS,
  payload
});

export const requestAllTracks = () => dispatch => {
  return fetchAllTracks().then(payload => dispatch(receiveAllTracks(payload)));
};

export const createNewTrack = formTrack => dispatch => {
  return postTrack(formTrack);
};
