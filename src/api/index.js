import {_getUsers, _getQuestions, _saveQuestionAnswer } from "./_DATA";


export function fetchAllData() {
  return Promise.all([
    _getUsers(),
    _getQuestions()
  ]).then(([users, questions]) => ({users, questions}));
}

export function fetchUserData() {
  return Promise.all([
    _getUsers()
  ]).then(([users]) => ({users}));
}

export function fetchQuestionData() {
  return Promise.all([
    _getQuestions()
  ]).then(([questions]) => ({questions}));
}

export function postQuestionAnswer({ authedUser, question_id, answer}) {
  return _saveQuestionAnswer({
    authedUser,
    answer,
    qid: question_id
  });
}
