export const RECEIVE_CURRENT_TRACK = 'RECEIVE_CURRENT_TRACK';
export const RECEIVE_NEXT_TRACKS = 'RECEIVE_NEXT_TRACKS';
export const SHIFT_NEXT_TRACK = 'SHIFT_NEXT_TRACK';

export const receiveCurrentTrack = currentTrack => {
  return {
    type: RECEIVE_CURRENT_TRACK,
    currentTrack
  }
};

export const receiveNextTracks = nextTracks => {
  return {
    type: RECEIVE_NEXT_TRACKS,
    nextTracks
  }
}

export const shiftNextTrack = () => {
  return {
    type: SHIFT_NEXT_TRACK
  }
}
