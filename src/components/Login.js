import React, { Component } from "react";
import { connect } from "react-redux";
import { handleGetUsers } from "../actions/users";


class Login extends Component {

  componentDidMount() {
    this.props.dispatch(handleGetUsers());
  }

  render() {
    const {users} = this.props;
    return (
      <div className="section">
        <div className="container">
          Login
          <form>
            <div className="field">
              <label className="label">Select Your User</label>
              <div className="control">
                <div className="select">
                  <select>
                    {users.map(user => (
                      <option key={user.id} value={user.id}>{user.name}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <div className="field">
              <div className="control">
                <button className="button is-link">Log In As User</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

function mapStateToProps({users}) {
  return {
    users: Object.values(users)
  }
}

export default connect(mapStateToProps)(Login);
