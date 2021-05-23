import React, { Component } from "react";
import { connect } from "react-redux";
import UserScoreList from "./UserScoreList";


class Leaderboard extends Component {
  render() {
    const { displayUsers, users } = this.props;
    return (
      <div className="section">
        <div className="container">
          <h1 className="is-size-1 is-uppercase has-text-centered">Leaderboard</h1>
          <hr/>
          <UserScoreList users={users.slice(0, displayUsers)} />
        </div>
      </div>
    )
  }
}

function mapStateToProps({ users }) {
  const usersByScore = Object.keys(users)
    .map(id => ({
      ...users[id],
      score: Object.keys(users[id].answers).length + users[id].questions.length
    }))
    .sort((a, b) => b.score - a.score);

  return { users: usersByScore };
}

export default connect(mapStateToProps)(Leaderboard);
