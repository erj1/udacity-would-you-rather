import { USER_GET_ALL, USER_QUESTION_SAVE } from "../actions/users";
import { QUESTION_ANSWER_SAVE } from "../actions/questions";


export default function users (state = {}, action) {
  switch (action.type) {

    case QUESTION_ANSWER_SAVE:
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
