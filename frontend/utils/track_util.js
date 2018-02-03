export const postTrack = (track) => {
  return $.ajax({
    url: '/api/tracks',
    method: 'POST',
    dataType: 'json',
    contentType: false,
    processData: false,
    data: track
  });
};

export const fetchAllTracks = () => {
  return $.ajax({
    url: '/api/tracks',
    method: 'GET'
  })
};

export const deleteTrack = id => (
  $.ajax({
    url: '/api/tracks/' + id,
    method: 'DELETE'
  })
);
