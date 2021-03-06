import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import LoadingBar from "react-redux-loading";
import { loadInitialData } from '../actions/shared';
import Dashboard from "./Dashboard";
import NavBar from "./NavBar";
import QuestionDetails from "./QuestionDetails";
import Login from "./Login";
import QuestionNew from "./QuestionNew";
import Leaderboard from "./Leaderboard";
import { Error404 } from "./errors";

class App extends Component {

  componentDidMount() {
    this.props.loadInitialData();
  }

  renderApp() {
    const { authedUser } = this.props;
    return authedUser === null
      ? <Login />
      : <section className="section">
          <div className="container is-max-desktop">
            <NavBar />
            <Switch>
              <Route path='/' exact component={Dashboard} />
              <Route path='/questions/:id' component={QuestionDetails} />
              <Route path='/add' component={QuestionNew} />
              <Route path='/leaderboard' render={() => (<Leaderboard displayUsers="3" />)} />
              <Route component={Error404} />
            </Switch>
          </div>
        </section>
  }

  render() {
    const { loading } = this.props;
    return (
      <Fragment>
        <LoadingBar />
        <BrowserRouter>
          { loading === true ? null : this.renderApp() }
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

export default connect(mapStateToProps, { loadInitialData })(App);
