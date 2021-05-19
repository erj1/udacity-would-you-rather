import {fetchAllData} from "../api";
import { getUsers } from "./users";
import { getQuestions } from "./questions";
import { showLoading, hideLoading } from "react-redux-loading";


export function loadInitialData() {
  return (dispatch) => {
    dispatch(showLoading());
    return fetchAllData().then(({users, questions}) => {
      dispatch(getUsers(users));
      dispatch(getQuestions(questions));
      dispatch(hideLoading());
    });
  }
}
