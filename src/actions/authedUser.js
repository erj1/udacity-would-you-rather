export const SET_AUTHED_USER = 'SET_AUTHED_USER';
export const AUTHED_USER_LOGOUT = 'AUTHED_USER_LOGOUT';

export function setAuthedUser(id) {
  return {
    type: SET_AUTHED_USER,
    id
  }
}

export function authedUserLogout() {
  return {
    type: AUTHED_USER_LOGOUT
  }
}
