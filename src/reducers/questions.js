import { QUESTION_ANSWER_SAVE, QUESTION_GET_ALL } from "../actions/questions";


export default function questions (state={}, action) {
  switch (action.type) {

    case QUESTION_ANSWER_SAVE:
      const question = state[action.question_id];
      return {
        ...state,
        [question.id]: {
          ...question,
          [action.answer]: {
            ...question[action.answer],
            votes: question[action.answer].votes.concat([action.authedUser])
          }
        }
      }

    case QUESTION_GET_ALL:
      return {
        ...state,
        ...action.questions
      };

    default:
      return state;

  }
}
