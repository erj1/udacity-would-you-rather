import { LOADING_USERS, LOADING_USERS_SUCCESS, LOADING_USERS_FAILURE } from "../actions/users";

export default function users (state = {}, action) {
  switch (action.type) {
    case LOADING_USERS:
      return {
        ...state,
        isUserDataLoading: true
      }

    case LOADING_USERS_SUCCESS:
      return {
        ...state,
        isUserDataLoading: false,
        ...action.data.users
      }

    case LOADING_USERS_FAILURE:
      return {
        ...state,
        isUserDataLoading: false,
      }

    default:
      return state;
  }
}
