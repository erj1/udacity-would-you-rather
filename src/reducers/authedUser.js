import { AUTHED_USER_LOGIN, AUTHED_USER_LOGOUT } from "../actions/authedUser";

export default function authedUser(state=null, action) {
  switch (action.type) {

    case AUTHED_USER_LOGIN:
      return action.id

    case AUTHED_USER_LOGOUT:
      return null

    default:
      return state

  }
}
