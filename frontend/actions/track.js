import { postTrack } from '../utils/track_util.js';

export const createNewTrack = formTrack => dispatch => {
  postTrack(formTrack);
};
