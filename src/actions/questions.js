import { fetchAllData, fetchQuestionData } from "../api";
import { getUsers } from "./users";

export const GET_QUESTIONS = 'GET_QUESTIONS';

export function handleGetQuestions() {
  return (dispatch) => {
    return fetchAllData().then(({users, questions}) => {
      dispatch(getUsers(users));
      dispatch(getQuestions(questions));
    });
  }
}

export function getQuestions(questions) {
  return {
    type: GET_QUESTIONS,
    questions
  }
}
