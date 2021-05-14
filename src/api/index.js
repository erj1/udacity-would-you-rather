import {_getUsers, _getQuestions } from "./_DATA";


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
