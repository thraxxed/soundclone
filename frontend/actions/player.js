export const RECEIVE_CURRENT_TRACK = 'RECEIVE_CURRENT_TRACK';

export const receiveCurrentTrack = currentTrack => {
  console.log(currentTrack);
  console.log("hi");
  return {
    type: RECEIVE_CURRENT_TRACK,
    currentTrack
  }
};
