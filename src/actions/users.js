import { fetchUserData } from "../api";

export const USER_GET_ALL = 'USER_GET_ALL';
export const USER_ANSWER_SAVE = 'USER_ANSWER_SAVE';
export const USER_QUESTION_SAVE = 'USER_QUESTION_SAVE';


export function handleGetUsers() {
  return (dispatch) => {
    return fetchUserData()
      .then(({users}) => {
        dispatch(getUsers(users));
      });
  }
}

export function getUsers(users) {
  return {
    type: USER_GET_ALL,
    users
  };
}

export function saveUserAnswer({ authedUser, question_id, answer }) {
  return {
    type: USER_ANSWER_SAVE,
    authedUser,
    question_id,
    answer
  }
}

export function saveUserQuestion({id, author}) {
  return {
    type: USER_QUESTION_SAVE,
    question_id: id,
    authedUser: author
  }
}
