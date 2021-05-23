import React, { Component } from "react";
import { connect } from "react-redux";
import clsx from "clsx";
import '@creativebulma/bulma-badge/dist/bulma-badge.min.css';
import CurrentQuestions from './CurrentQuestions';
import PastQuestions from "./PastQuestions";


class Dashboard extends Component {

  tabs = [
    {name: "currentQuestions", display: "Current Questions"},
    {name: "pastQuestions", display: "Past Questions"}
  ]

  state = {
    activeTabName: this.tabs[0].name
  }

  selectTab = (tabName) => {
    this.setState({
      activeTabName: tabName
    })
  }

  render() {
    const { activeTabName } = this.state;
    const { currentQuestions, pastQuestions } = this.props;
    return (
      <div className="section">
        <div className="container">

          <div className="tabs is-large is-centered">
            <ul>
              {this.tabs.map(tab => (
                <li key={tab.name}
                    className={ clsx(tab.name === activeTabName && 'is-active') }
                    onClick={() => {this.selectTab(tab.name)}}>
                  <a>{tab.display}</a>
                </li>
              ))}
            </ul>
          </div>
          { activeTabName === "currentQuestions" && <CurrentQuestions questions={currentQuestions} /> }
          { activeTabName === "pastQuestions" && <PastQuestions questions={pastQuestions} /> }
        </div>
      </div>
    );
  }
}

function mapStateToProps({users, questions, authedUser}) {
  const user = users[authedUser];

  const pastQuestions = Object.keys(user.answers)
    .sort((a, b) => questions[b].timestamp - questions[a].timestamp);

  const currentQuestions = Object.keys(questions)
    .filter(id => !pastQuestions.includes(id))
    .sort((a, b) => questions[b].timestamp - questions[a].timestamp);

  return { user, pastQuestions, currentQuestions }
}

export default connect(mapStateToProps)(Dashboard);
