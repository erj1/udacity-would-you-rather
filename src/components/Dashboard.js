import React, { Component } from "react";
import { connect } from "react-redux";
import '@creativebulma/bulma-badge/dist/bulma-badge.min.css';
import Questions from "./Questions";


class Dashboard extends Component {

  tabs = [
    {name: "currentQuestions", display: "Current Questions"},
    {name: "pastQuestions", display: "Past Questions"}
  ]

  state = {
    activeTabName: this.tabs[0].name
  }

  isActive = tabName => {
    const { activeTabName } = this.state;
    return tabName === activeTabName ? 'is-active': '';
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
                    className={this.isActive(tab.name)}
                    onClick={() => {this.selectTab(tab.name)}}>
                  <a>{tab.display}</a>
                </li>
              ))}
            </ul>
          </div>
          { activeTabName === this.tabs[0].name && <Questions questions={currentQuestions} /> }
          { activeTabName === this.tabs[1].name && <Questions questions={pastQuestions} /> }
        </div>
      </div>
    );
  }
}

function mapStateToProps({users, questions, authedUser}) {
  const user = users[authedUser];
  const pastQuestions = user ? Object.keys(user.answers) : null;
  const currentQuestions = user ? Object.keys(questions).filter(id => !pastQuestions.includes(id)): null;

  return { user, pastQuestions, currentQuestions }
}

export default connect(mapStateToProps)(Dashboard);
