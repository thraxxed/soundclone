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

export const fetchTrack = id => (
  $.ajax({
    method: 'GET',
    url: 'api/tracks/' + id
  })
);

export const deleteTrack = id => (
  $.ajax({
    url: '/api/tracks/' + id,
    method: 'DELETE'
  })
);

export const updateTrack = track => {
  console.log(track);
  return $.ajax({
    url: 'api/tracks/' + track.id,
    method: 'PATCH',
    dataType: 'json',
    contentType: false,
    processData: false,
    data: track
  })
};
