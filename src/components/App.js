import React, { Component, Fragment } from 'react';
import { connect } from "react-redux";
import LoadingBar from "react-redux-loading";
import { loadInitialData } from '../actions/shared';
// import Dashboard from "./Dashboard";
import QuestionDetails from "./QuestionDetails";

class App extends Component {

  componentDidMount() {
    this.props.dispatch(loadInitialData());
  }

  render() {
    const { loading } = this.props;
    return (
      <section className="section">
        <div className="container is-max-desktop">
          {
            this.loading === true
              ? null
              : <QuestionDetails id='xj352vofupe1dqz9emx13r' authedUser='monicafields' />
          }
          {/*<Dashboard authedUser='shellylong' />*/}
        </div>
      </section>
    );
  }
}

function mapStateToProps({users, questions}) {
  return {
    loading: users === null || questions === null
  };
}

export default connect()(App);
