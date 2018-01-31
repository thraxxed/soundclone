import { postUser, deleteSession, postSession } from '../utils/session';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';

export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user,
});

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

const clearErrors = () => ({
  type: CLEAR_ERRORS
})

export const createNewUser = formUser => dispatch => postUser(formUser)
  .then(  (user) => {
    dispatch(receiveCurrentUser(user))
  },
  (errors) => {
    dispatch(receiveErrors(errors.responseJSON));
  }
);

export const login = formUser => dispatch => postSession(formUser)
  .then( user => {
    dispatch(receiveCurrentUser(user))
  },
  errors => {
    dispatch(receiveErrors(errors.responseJSON));
  }
);

export const logout = () => dispatch => deleteSession()
  .then(() => dispatch(logoutCurrentUser()));

export const clearErrorsThunk = () => dispatch => dispatch(clearErrors());
