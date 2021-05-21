import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { authedUserLogout } from "../actions/authedUser";

class NavBar extends Component {

  state = {
    isActive: false
  }

  handleToggleNavbar = () => {
    this.setState((currentState) => ({
      isActive: !currentState.isActive
    }))
  }

  handleLogout = () => {
    this.props.dispatch(authedUserLogout());
    this.props.history.push('/');
  }

  render() {
    const { isActive } = this.state;
    const { user } = this.props;

    return (
      <nav className="navbar">
        <div className="navbar-brand">
          <a role="button"
             className={ isActive ? "navbar-burger is-active" : "navbar-burger"}
             onClick={this.handleToggleNavbar}>
            <span></span>
            <span></span>
            <span></span>
          </a>
        </div>
        <div className={ isActive ? "navbar-menu is-active" : "navbar-menu"}>
          <div className="navbar-start">
            <NavLink to="/" exact className="navbar-item is-tab" activeClassName="is-active">Dashboard</NavLink>
            <NavLink to="/add" className="navbar-item is-tab" activeClassName="is-active">New Question</NavLink>
            <NavLink to="/leaderboard" className="navbar-item is-tab" activeClassName="is-active">Leaderboard</NavLink>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">Welcome, { user.name }</div>
            <div className="navbar-item">
              <a className="button" role="button" onClick={this.handleLogout}>Log Out</a>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({authedUser, users}) {
  return {
    user: users[authedUser]
  }
}

export default withRouter(connect(mapStateToProps)(NavBar));
