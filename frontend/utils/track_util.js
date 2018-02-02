export const postTrack = (track) => {
  console.log("inside the ajax call");
  console.log(track);
  return $.ajax({
    url: '/api/tracks',
    method: 'POST',
    dataType: 'json',
    contentType: false,
    processData: false,
    data: track
  });
};
