import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import LoadingBar from "react-redux-loading";
import { loadInitialData } from '../actions/shared';
import Dashboard from "./Dashboard";
import NavBar from "./NavBar";
import QuestionDetails from "./QuestionDetails";
import Login from "./Login";

class App extends Component {

  componentDidMount() {
    this.props.dispatch(loadInitialData());
  }

  renderApp() {
    const { authedUser } = this.props;
    return authedUser === null
      ? <Login />
      : <div>
          <NavBar />
          <Route path='/' exact component={Dashboard} />
        </div>
  }

  render() {
    const { loading } = this.props;
    return (
      <Fragment>
        <LoadingBar />
        <BrowserRouter>
          <section className="section">
            <div className="container is-max-desktop">
              { loading === true ? null : this.renderApp() }
            </div>
          </section>
        </BrowserRouter>
      </Fragment>
    );
  }
}

function mapStateToProps({users, questions, authedUser}) {
  return {
    loading: users === null || questions === null,
    authedUser
  };
}

export default connect(mapStateToProps)(App);
