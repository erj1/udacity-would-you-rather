import {fetchAllData} from "../api";
import { getUsers } from "./users";
import { getQuestions } from "./questions";
import { setAuthedUser } from "./authedUser";
import { showLoading, hideLoading } from "react-redux-loading";

const AUTHED_USER_ID = 'shaneyee';

export function loadInitialData() {
  return (dispatch) => {
    dispatch(showLoading());
    return fetchAllData().then(({users, questions}) => {
      dispatch(getUsers(users));
      dispatch(getQuestions(questions));
      dispatch(setAuthedUser(AUTHED_USER_ID));
      dispatch(hideLoading());
    });
  }
}
