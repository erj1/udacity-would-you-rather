import { USER_ANSWER_SAVE, USER_GET_ALL, USER_QUESTION_SAVE } from "../actions/users";


export default function users (state = {}, action) {
  switch (action.type) {

    case USER_ANSWER_SAVE:
      const user = state[action.authedUser];
      return {
        ...state,
        [user.id]: {
          ...user,
          answers: {
            ...user.answers,
            [action.question_id]: action.answer
          }
        }
      }

    case USER_QUESTION_SAVE:
      return {
        ...state,
        [action.authedUser]: {
          ...state[action.authedUser],
          questions: state[action.authedUser].questions.concat([action.question_id])
        }
      }

    case USER_GET_ALL:
      return {
        ...state,
        ...action.users
      }

    default:
      return state;
  }
}
