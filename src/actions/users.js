import { fetchUserData } from "../api";

export const LOADING_USERS = 'LOADING_USERS';
export const LOADING_USERS_SUCCESS = 'LOADING_USERS_SUCCESS';
export const LOADING_USERS_FAILURE = 'LOADING_USERS_FAILURE';

export function handleUserData() {
  return (dispatch) => {

    dispatch(loadingUsers());

    return fetchUserData()
      .then((users) => {
        dispatch(loadingUsersSuccess(users));
      }, (err) => {
        dispatch(loadingUsersFailure());
      })
  }
}

export function loadingUsers() {
  return {
    type: LOADING_USERS,
  }
}

export function loadingUsersSuccess(users) {
  return {
    type: LOADING_USERS_SUCCESS,
    data: {
      users
    }
  };
}

export function loadingUsersFailure() {
  return {
    type: LOADING_USERS_FAILURE
  }
}
