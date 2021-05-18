import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import logo from "../assets/images/logo.png";
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
  }

  render() {
    const { isActive } = this.state;
    const { authedUser } = this.props;

    return (
      <nav className="navbar">
        <div className="navbar-brand">
          <NavLink to="/" className="navbar-item">
            <img src={logo} alt="Would Your Rather Logo" className="image"/>
          </NavLink>
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
            <NavLink to="/" className="navbar-item">Dashboard</NavLink>
            <div className="navbar-item">New Question</div>
            <div className="navbar-item">Leaderboard</div>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">Welcome, { authedUser }</div>
            <div className="navbar-item">
              <a role="button" onClick={this.handleLogout}>Log Out</a>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({authedUser}) {
  return {
    authedUser
  }
}

export default connect(mapStateToProps)(NavBar);
