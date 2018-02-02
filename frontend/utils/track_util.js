export const postTrack = (track) => {
  return $.ajax({
    url: '/api/tracks',
    method: 'POST',
    data: { track }
  });
}
