import { postQuestionAnswer, postQuestionData } from "../api";
import { saveUserQuestion, saveUserAnswer  } from "./users";
import { hideLoading, showLoading } from "react-redux-loading";

export const QUESTION_CREATE = 'QUESTION_CREATE';
export const QUESTION_GET_ALL = 'QUESTION_GET_ALL';
export const QUESTION_ANSWER_SAVE = 'QUESTION_ANSWER_SAVE';


export function handleSaveQuestionAnswer(questionAnswer) {
  return (dispatch) => {
    dispatch(showLoading());
    return postQuestionAnswer(questionAnswer)
      .then(() => {
        dispatch(saveQuestionAnswer(questionAnswer));
      })
      .then(() => dispatch(hideLoading()))
      .catch((e) => {
        console.warn('There was an error while attempting to save a question\'s answer.');
        alert('We\'re sorry, but there was an error while attempting to save your answer.  Please try again.');
      });
  }
}

export function handleCreateQuestion(question) {
  return (dispatch) => {
    dispatch(showLoading());
    return postQuestionData(question)
      .then((formattedQuestion) => {
        dispatch(createQuestion(formattedQuestion));
        dispatch(saveUserQuestion(formattedQuestion));
      })
      .then(() => dispatch(hideLoading()))
      .catch((error) => {
        console.warn('There was an error while attempting to save the new question.', error);
        alert('We\'re sorry, but there was an error while attempting to create your new question.  Please try again.');
      })
  }
}

export function createQuestion(question) {
  return {
    type: QUESTION_CREATE,
    question
  }
}

export function getQuestions(questions) {
  return {
    type: QUESTION_GET_ALL,
    questions
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
