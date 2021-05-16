import {fetchAllData} from "../api";
import {getUsers} from "./users";
import {getQuestions} from "./questions";


export function loadInitialData() {
  return (dispatch) => {
    return fetchAllData().then(({users, questions}) => {
      dispatch(getUsers(users));
      dispatch(getQuestions(questions));
    });
  }
}
