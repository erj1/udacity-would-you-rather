export const AUTHED_USER_LOGIN = 'AUTHED_USER_LOGIN';
export const AUTHED_USER_LOGOUT = 'AUTHED_USER_LOGOUT';

export function authedUserLogin(id) {
  return {
    type: AUTHED_USER_LOGIN,
    id
  }
}

export function authedUserLogout() {
  return {
    type: AUTHED_USER_LOGOUT
  }
}
