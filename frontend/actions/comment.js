import * as CommentUtil from '../utils/comment_util.js';

export const RECEIVE_ALL_COMMENTS = 'RECEIVE_ALL_COMMENTS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';

const receiveComments = payload => ({
  type: RECEIVE_ALL_COMMENTS,
  payload
});

const receiveComment = comment => ({
  type: RECEIVE_COMMENT,
  comment
});

const removeComment = commentId => ({
  type: REMOVE_COMMENT,
  commentId
});

export const requestComments = (trackId) => dispatch => {
  return CommentUtil.fetchComments(trackId).then(payload => dispatch(receiveComments(payload)));
};

export const createComment = formComment => dispatch => {
  return CommentUtil.postComment(formComment).then(comment => dispatch(receiveComment(comment)));
}

export const deleteComment = commentId => dispatch => (
  CommentUtil.deleteComment(commentId).then(comment => dispatch(removeComment(comment)))
);
