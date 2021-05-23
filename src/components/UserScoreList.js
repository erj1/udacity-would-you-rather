import React from "react";
import {connect} from "react-redux";
import UserScore from "./UserScore";

const UserScoreList = (props) => {
  const { authedUser, users } = props;

  return (
    users.map(user => (
      <UserScore
        key={user.id}
        user={user}
        isAuthedUser={ user.id === authedUser }
      />
    ))
  );
}

function mapStateToProps({authedUser}) {
  return {
    authedUser
  }
}

export default connect(mapStateToProps)(UserScoreList);
