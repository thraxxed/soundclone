export const postComment = comment => {
  return $.ajax({
    url: '/api/comments',
    method: 'POST',
    data: { comment }
  })
};

export const fetchComments = track_id => {
  return $.ajax({
    url: '/api/comments',
    method: 'GET',
    data: { track_id }
  })
};

export const deleteComment = id => (
  $.ajax({
    url: '/api/comments/' + id,
    method: 'DELETE'
  })
);
