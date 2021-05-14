import React, { Component } from "react";
import { connect } from "react-redux";
import '@creativebulma/bulma-badge/dist/bulma-badge.min.css';
import { handleGetUsers } from "../actions/users";
import { handleGetQuestions } from "../actions/questions";
import Question from "./Question";


class Dashboard extends Component {

  componentDidMount() {
    this.props.dispatch(handleGetUsers());
    this.props.dispatch(handleGetQuestions())
  }

  render() {
    const { answered_questions, unanswered_questions, user } = this.props;
    return (
      <div className="section">
        <div className="container">

          <h2>Hello, {user && user.name}</h2>

          <div className="tabs is-large is-centered">
            <ul>
              <li className="is-active"><a href="#">Questions</a></li>
              <li><a href="#">Past Questions</a></li>
            </ul>
          </div>



          <div>
            <h2>Questions</h2>
            {unanswered_questions && unanswered_questions.map(question => (
              <Question key={question} id={question} />
            ))}
          </div>

          <hr/>

          <div>
            <h2>Past Questions</h2>
            {answered_questions && answered_questions.map(question => (
              <Question key={question} id={question} />
            ))}
          </div>

        </div>
      </div>
    );
  }
}

function mapStateToProps({users, questions}, {authedUser}) {
  const user = users[authedUser];
  const answered_questions = user ? Object.keys(user.answers) : null;
  const unanswered_questions = user ? Object.keys(questions).filter(id => !answered_questions.includes(id)): null;

  return { user, answered_questions, unanswered_questions }
}

export default connect(mapStateToProps)(Dashboard);
