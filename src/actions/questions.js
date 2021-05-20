import { fetchAllData, postQuestionAnswer } from "../api";
import { getUsers } from "./users";
import { hideLoading, showLoading } from "react-redux-loading";
import { saveUserAnswer } from "./users";

export const QUESTION_GET_ALL = 'QUESTION_GET_ALL';
export const QUESTION_ANSWER_SAVE = 'QUESTION_ANSWER_SAVE';

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
    type: QUESTION_GET_ALL,
    questions
  }
}

export function handleSaveQuestionAnswer(questionAnswer) {
  return (dispatch) => {
    dispatch(showLoading());
    return postQuestionAnswer(questionAnswer)
      .then(() => {
        dispatch(saveQuestionAnswer(questionAnswer));
        dispatch(saveUserAnswer(questionAnswer));
      })
      .then(() => dispatch(hideLoading()))
      .catch((e) => {
        console.warn('There was an error while attempting to save a question\'s answer.');
        alert("We're sorry, but there was an error while attempting to save your answer.  Please try again.");
      });
  }
}

export function saveQuestionAnswer({ authedUser, question_id, answer }) {
  return {
    type: QUESTION_ANSWER_SAVE,
    authedUser,
    question_id,
    answer
  }
}
