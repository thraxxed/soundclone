import { postTrack } from '../utils/session';

export const createNewTrack = formTrack => dispatch => {
  postTrack(formTrack);
};
