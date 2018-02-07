export const RECEIVE_CURRENT_TRACK = 'RECEIVE_CURRENT_TRACK';

export const receiveCurrentTrack = currentTrack => {
  return {
    type: RECEIVE_CURRENT_TRACK,
    currentTrack
  }
};
