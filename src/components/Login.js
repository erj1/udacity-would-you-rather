import React, { Component } from "react";
import { connect } from "react-redux";
import { authedUserLogin } from "../actions/authedUser";
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
    const { authedUser } = this.state;
    this.props.dispatch(authedUserLogin(authedUser));
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
      <div className="hero is-primary is-fullheight">
        <div className="hero-body">
          <div className="container">
            <div className="columns">
              <div className="box column is-one-third is-offset-one-third">
                <div className="has-text-centered">
                  <h1 className="is-size-1">Login</h1>
                </div>
                <hr/>
                <form className="block" onSubmit={this.handleFormSubmission}>
                  <div className="field">
                    <label className="label">Select Your User</label>
                    <div className="control is-expanded">
                      <div className="select is-fullwidth">
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
                      <button className="button is-link is-fullwidth">Log In As User</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
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
