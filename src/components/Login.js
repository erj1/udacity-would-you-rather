import React, { Component } from "react";
import { connect } from "react-redux";
import { handleGetUsers } from "../actions/users";


class Login extends Component {

  state = {
    authedUser: '',

  }

  componentDidMount() {
    this.props.dispatch(handleGetUsers());
  }

  handleFormSubmission = (event) => {
    event.preventDefault();
    // TODO: Set authedUser in the store
    // TODO: Redirect to the dashboard
  }

  handleUserSelection = (event) => {
    const user = event.target.value;
    this.setState(() => ({
      authedUser: user
    }));
  }

  render() {
    const { users } = this.props;
    const { authedUser } = this.state;

    return (
      <div className="section">
        <div className="container">
          Login
          <form onSubmit={this.handleFormSubmission}>
            <div className="field">
              <label className="label">Select Your User</label>
              <div className="control">
                <div className="select">
                  <select value={authedUser} onChange={this.handleUserSelection}>
                    <option value="">Select Your User</option>
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
